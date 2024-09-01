from django.http import JsonResponse
from rest_framework.decorators import api_view
from PIL import Image
from torchvision import transforms
import torch
import os
import requests
import google.generativeai as genai
from pathlib import Path
from django.conf import settings
from rest_framework.response import Response

HUB_URL = "SharanSMenon/swin-transformer-hub"
MODEL_NAME = "swin_tiny_patch4_window7_224"
model = torch.hub.load(HUB_URL, MODEL_NAME, pretrained=True)



BASE_DIR = Path(__file__).resolve().parent

# Define the model path relative to the base directory
MODEL_PATH = BASE_DIR / "model" / "model.pt"
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, 'model', 'model.pt')
model = torch.load(MODEL_PATH, map_location=torch.device('cpu'))
model.eval()

class_labels = ['Apple Apple scab', 'Apple Black rot', 'Apple Cedar apple rust', 'Apple healthy', 'Blueberry healthy', 
'Cherry (including sour) Powdery mildew', 'Cherry (including sour) healthy', 'Corn (maize) Cercospora leaf spot Gray leaf spot',
 'Corn (maize) Common rust', 'Corn (maize) Northern Leaf Blight', 'Corn (maize) healthy', 'Grape Black rot', 
 'Grape Esca (Black Measles)', 'Grape Leaf blight (Isariopsis Leaf Spot)', 'Grape healthy', 
 'Orange Haunglongbing (Citrus greening)', 'Peach Bacterial spot', 'Peach healthy', 'Pepper bell Bacterial spot', 'Pepper bell healthy',
  'Potato Early blight', 'Potato Late blight', 'Potato healthy', 'Raspberry healthy', 'Soybean healthy', 'Squash Powdery mildew', 
  'Strawberry Leaf scorch', 'Strawberry healthy', 'Tomato Bacterial spot', 'Tomato Early blight', 'Tomato Late blight', 'Tomato Leaf Mold',
   'Tomato Septoria leaf spot', 'Tomato Spider mites Two-spotted spider mite', 'Tomato Target Spot', 'Tomato Tomato Yellow Leaf Curl Virus',
    'Tomato Tomato mosaic virus', 'Tomato healthy']

# Imagga API credentials (Replace with your actual keys)
IMAGGA_API_KEY = 'acc_9b9a4e4e940b6f6' 
IMAGGA_API_SECRET = 'e939f63c45f58154e035c9be6d9d50ec'

# Configure Gemini API (Replace with your actual key)
API_KEY = "AIzaSyBR4Q7Oaxc3DAoTpDJVBE3l79sRHJWY610"
genai.configure(api_key=API_KEY)
gemini_model_name = "gemini-1.5-flash"
gemini_model = genai.GenerativeModel(gemini_model_name)

def preprocess(image):
    preprocess_transforms = transforms.Compose([
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
    ])
    input_tensor = preprocess_transforms(image).unsqueeze(0)
    return input_tensor

def postprocess(output):
    _, predicted = torch.max(output, 1)
    predicted_index = predicted.item()
    if predicted_index >= len(class_labels) or predicted_index < 0:
        raise IndexError("Predicted index out of range of class labels")
    predicted_class = class_labels[predicted_index]
    print(f"Predicted class: {predicted_class}")
    return {"prediction": predicted_class}

def is_plant(image_path):
    url = "https://api.imagga.com/v2/tags"
    with open(image_path, 'rb') as image_file:
        response = requests.post(url, auth=(IMAGGA_API_KEY, IMAGGA_API_SECRET), files={'image': image_file})
    if response.status_code != 200:
        return False

    tags = response.json().get('result', {}).get('tags', [])
    for tag in tags:
        if tag['tag']['en'].lower() == 'plant':
            return True
    return False

@api_view(['POST'])
def predict(request):
    if 'image' not in request.FILES:
        return JsonResponse({'error': 'No image provided'}, status=400)

    image_file = request.FILES['image']
    print(f"Received image: {image_file.name}, size: {image_file.size} bytes")

    # Save the uploaded image temporarily
    try:
        image_path = os.path.join(settings.MEDIA_ROOT, 'temp_image.jpg')
        with open(image_path, 'wb+') as destination:
            for chunk in image_file.chunks():
                destination.write(chunk)

        # Check if the image contains a plant
        plant_check = is_plant(image_path)
        print(f"Plant check: {plant_check}")
        if not plant_check:
            return JsonResponse({"result": "The uploaded image is not a plant.", "chat_enabled": False})

        # Process the image for disease detection
        image = Image.open(image_path)
        input_tensor = preprocess(image)
        with torch.no_grad():
            output = model(input_tensor)

        result = postprocess(output)
        prediction = result["prediction"]
        is_healthy = "healthy" in prediction.lower()

        response_data = {
            "result": prediction,
            "chat_enabled": not is_healthy,
            "disease": prediction
        }
        return JsonResponse(response_data)

    except Exception as e:
        return JsonResponse({'error': f'An error occurred: {str(e)}'}, status=500)
    finally:
        if os.path.exists(image_path):
            os.remove(image_path)

# ... (Add the /chat route logic if needed) ... 
@api_view(['POST'])
def chat(request):
    try:
        # Extract data from the request body (assuming JSON format)
        data = request.data
        question = data.get('question', '')
        disease = data.get('disease', '')

        if not question or not disease:
            return JsonResponse({'error': 'Both question and disease fields are required.'}, status=400)

        # Start a new chat session for each request
        chat = gemini_model.start_chat()

        # Provide context about the detected disease
        context = f"The plant disease '{disease}' has been detected. Answer the following question briefly in 100 words: {question}"

        # Send the message to Gemini and get the response
        response = chat.send_message(context)
        msg = response.text

        return JsonResponse({"answer": msg})

    except Exception as e:
        error_msg = f"Error in chat: {str(e)}"
        print(error_msg)
        return JsonResponse({'error': error_msg}, status=500)
    
@api_view(['GET'])
def homepage(request):
    return Response({"message": "Welcome to the Plant API"})