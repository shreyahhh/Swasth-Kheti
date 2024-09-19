# Swasth-Kheti

## Overview

This project is designed to help users detect plant diseases by uploading images of plants through a web-based interface. The system utilizes machine learning models to analyze the uploaded images and detect if the plant is diseased, as well as provides suggestions for further actions. In addition to image-based disease detection, the system also incorporates a chatbot that interacts with users, providing additional assistance and information based on their queries.

## Workflow

User Interaction: The user accesses the React frontend, where they can either upload an image or interact with the chatbot.

Image Upload: The user uploads a plant image, which is sent to the Django backend.

Image Processing: The backend stores the image in temporary storage.
The Imagga API checks if the image contains a plant.
If confirmed, the image is processed by the Swin Transformer Model to detect any plant diseases.

Result Display: The disease detection result is sent back to the frontend and displayed to the user.

Chatbot Interaction: The user can start or continue a conversation with the chatbot to ask follow-up questions. The Gemini AI Model processes the user’s messages and generates appropriate responses.

Result or Follow-up: The user can either get the disease detection result or use the chatbot for further assistance.

## Technologies Used

Frontend: React.js

Backend: Django REST Framework

AI Models:
Swin Transformer Model for plant disease detection
Gemini AI Model for chatbot interaction

External APIs:
Imagga API for image tagging and plant verification

Storage: Temporary image storage system

Chatbot: Integrated chatbot interface for user interaction
