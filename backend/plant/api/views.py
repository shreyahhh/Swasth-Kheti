from django.http import JsonResponse
from rest_framework.decorators import api_view

@api_view(['POST'])
def predict(request):
    if 'image' not in request.FILES:
        return JsonResponse({'error': 'No image provided'}, status=400)

    image = request.FILES['image']
    # Add your logic for processing the image and making a prediction
    prediction = "Predicted result based on the image"  # Replace with actual prediction logic

    return JsonResponse({'prediction': prediction})
