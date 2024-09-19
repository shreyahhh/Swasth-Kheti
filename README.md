# Swasth-Kheti

##Overview

This project is designed to help users detect plant diseases by uploading images of plants through a web-based interface. The system utilizes machine learning models to analyze the uploaded images and detect if the plant is diseased, as well as provides suggestions for further actions. In addition to image-based disease detection, the system also incorporates a chatbot that interacts with users, providing additional assistance and information based on their queries.

##Features

Image Upload and Analysis: Users can upload images of plants for disease detection.

Chatbot Interface: The system offers a chatbot that interacts with users to answer questions or provide follow-up information.
Backend Processing: The backend utilizes Django API to process the uploaded images and return disease detection results.
AI Model Integration: The system integrates advanced AI models, such as Swin Transformer, for accurate plant disease prediction.
Project Architecture
The project is built using a combination of modern frontend, backend, and AI technologies. Below is the description of the components involved in the project:

1. Frontend - React App
The frontend is built using React.
It consists of an image upload component and a chatbot interface.
The user can upload plant images, start conversations with the chatbot, and receive real-time responses.
2. Image Upload Component
Users can upload images of plants using this component.
Once the image is uploaded, it is sent to the backend for processing.
3. Backend - Django API
The backend is responsible for receiving and processing the uploaded plant images.
It checks whether the uploaded image contains a plant by interacting with the Imagga API for image tagging.
If the image is recognized as a plant, it is passed to the Swin Transformer model for disease detection.
Temporary storage is used to store uploaded images during processing.
4. Temporary Storage
Uploaded images are stored temporarily before being processed for disease detection.
5. Imagga API
The backend uses the Imagga API to check if the uploaded image contains a plant.
The API returns tags for the uploaded image which are used for classification.
6. Swin Transformer Model
The Swin Transformer Model is used to detect plant diseases.
If the image is confirmed to contain a plant, it is passed to this model for disease detection.
The model returns the disease prediction, if any.
7. Chatbot Interface
The chatbot interface allows users to start and continue conversations with the system.
Users can ask questions, get results, or seek additional information.
8. Chat API Endpoint
This endpoint processes the user’s chat messages and sends them to the Gemini AI Model for generating appropriate responses.
The Chat API is responsible for managing all chatbot interactions and returning responses to the frontend.
9. Gemini AI Model
The Gemini AI Model is used to generate responses to user queries in the chatbot interface.
It processes the messages and provides relevant information based on the user's inputs.
Workflow
User Interaction: The user accesses the React frontend, where they can either upload an image or interact with the chatbot.
Image Upload: The user uploads a plant image, which is sent to the Django backend.
Image Processing:
The backend stores the image in temporary storage.
The Imagga API checks if the image contains a plant.
If confirmed, the image is processed by the Swin Transformer Model to detect any plant diseases.
Result Display: The disease detection result is sent back to the frontend and displayed to the user.
Chatbot Interaction: The user can start or continue a conversation with the chatbot to ask follow-up questions. The Gemini AI Model processes the user’s messages and generates appropriate responses.
Result or Follow-up: The user can either get the disease detection result or use the chatbot for further assistance.
Technologies Used
Frontend: React.js
Backend: Django REST Framework
AI Models:
Swin Transformer Model for plant disease detection
Gemini AI Model for chatbot interaction
External APIs:
Imagga API for image tagging and plant verification
Storage: Temporary image storage system
Chatbot: Integrated chatbot interface for user interaction
