from django.urls import path
from . import views

urlpatterns = [
    path('predict/', views.predict, name='predict'),
    path('chat/' , views.chat, name='chat'),
    path('', views.homepage, name='homepage'),
]