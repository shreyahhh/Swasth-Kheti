from django.http import JsonResponse
from rest_framework.decorators import api_view
import torch
from PIL import Image
from torchvision import transforms
import requests
import google.generativeai as genai
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render
import os

# Load models and configure APIs
HUB_URL = "SharanSMenon/swin-transformer-hub"
MODEL_NAME = "swin_tiny_patch4_window7_224"
model = torch.hub.load(HUB_URL, MODEL_NAME, pretrained=True)

# Load your existing disease detection model
model = torch.load('model/model.pt', map_location=torch.device('cpu'))
model.eval()

# Define the class labels for disease detection
class_labels = ['Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy', 'Blueberry___healthy', 
'Cherry_(including_sour)___Powdery_mildew', 'Cherry_(including_sour)___healthy', 'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot',
 'Corn_(maize)___Common_rust_', 'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy', 'Grape___Black_rot', 
 'Grape___Esca_(Black_Measles)', 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 'Grape___healthy', 
 'Orange___Haunglongbing_(Citrus_greening)', 'Peach___Bacterial_spot', 'Peach___healthy', 'Pepper,_bell___Bacterial_spot', 'Pepper,_bell___healthy',
  'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy', 'Raspberry___healthy', 'Soybean___healthy', 'Squash___Powdery_mildew', 
  'Strawberry___Leaf_scorch', 'Strawberry___healthy', 'Tomato___Bacterial_spot', 'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___Leaf_Mold',
   'Tomato___Septoria_leaf_spot', 'Tomato___Spider_mites Two-spotted_spider_mite', 'Tomato___Target_Spot', 'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
    'Tomato___Tomato_mosaic_virus', 'Tomato___healthy']

# Imagga API credentials
IMAGGA_API_KEY = 'acc_9b9a4e4e940b6f6'
IMAGGA_API_SECRET = 'e939f63c45f58154e035c9be6d9d50ec'

# Configure Gemini API
API_KEY = "AIzaSyBR4Q7Oaxc3DAoTpDJVBE3l79sRHJWY610"
genai.configure(api_key=API_KEY)
gemini_model_name = "gemini-1.5-flash"
gemini_model = genai.GenerativeModel(gemini_model_name)


@api_view(['POST'])
def predict(request):
    if 'image' not in request.FILES:
        return Response({"error": "No image file provided"}, status=status.HTTP_400_BAD_REQUEST)
    
    image_file = request.FILES['image']
    if image_file.name == '':
        return Response({"error": "No selected file"}, status=status.HTTP_400_BAD_REQUEST)
    
    # Save the image temporarily
    image_path = 'temp_image.jpg'
    with open(image_path, 'wb+') as destination:
        for chunk in image_file.chunks():
            destination.write(chunk)
    
    # Check if the image contains a plant
    plant_check = is_plant(image_path)
    if not plant_check:
        print("Prediction result: The uploaded image is not a plant.")
        return Response({"result": "The uploaded image is not a plant.", "chat_enabled": False})

    # Process the image for disease detection
    image = Image.open(image_path)
    input_tensor = preprocess(image)
    with torch.no_grad():
        output = model(input_tensor)
    
    # Convert the output to a class label
    try:
        result = postprocess(output)
        prediction = result["prediction"]
        is_healthy = "healthy" in prediction.lower()
        chat_enabled = not is_healthy
        print(f"Prediction result: {prediction}")
        print(f"Chat enabled: {chat_enabled}")
        return Response({"result": prediction, "chat_enabled": chat_enabled, "disease": prediction})
    except IndexError as e:
        error_msg = f"Predicted index out of range: {str(e)}"
        print(f"Error in prediction: {error_msg}")
        return Response({"error": error_msg}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def chat(request):
    data = request.data
    question = data.get('question', '')
    disease = data.get('disease', '')
    
    try:
        # Start a new chat session for each request
        chat = gemini_model.start_chat()
        
        # Provide context about the detected disease
        context = f"The plant disease '{disease}' has been detected. Answer the following question briefly in 50 words: {question}"
        
        # Send the message to Gemini and get the response
        response = chat.send_message(context)
        msg = response.text
        
        print(f"User question: {question}")
        print(f"Detected disease: {disease}")
        print(f"Bot response: {msg}")
        
        return Response({"answer": msg})
    except Exception as e:
        error_msg = f"Error in chat: {str(e)}"
        print(error_msg)
        return Response({"error": error_msg}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

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