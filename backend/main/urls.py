from django.urls import path

from main.views import *

urlpatterns = [
    path('animes/', anime_list),
    path('animes/<str:anime_name>/', anime_info),
    path('films/', film_list),
    path('comments/', CommentAPIView.as_view()),
    path('user/', UserAPIView.as_view())
]
