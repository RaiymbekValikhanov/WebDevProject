from django.http.response import JsonResponse
from django.shortcuts import redirect
from rest_framework.authentication import BasicAuthentication
from rest_framework.response import Response
from rest_framework import status
import json
from main.models import Anime, Film, User, Comment
from main.serializers import *

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework_jwt.views import VerifyJSONWebTokenSerializer

@api_view(['GET'])
def anime_list(request):
    animes = Anime.objects.all()
    serializer = AnimeSerializer(animes, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def anime_info(request, anime_name):
    anime = Anime.objects.all().get(name=anime_name)
    serializer = AnimeSerializer(anime)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def film_list(request):
    films = Film.objects.all()
    serializer = FilmSerializer(films, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


class UserAPIView(APIView):
    def get(self, request):
        try:
            token = request.META['HTTP_AUTHORIZATION'].split()[1]
            valid_data = VerifyJSONWebTokenSerializer().validate({'token': token})
            data = valid_data['user'].user
            serializer = UserSerializer(instance=data)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response('No Auth', status=status.HTTP_400_BAD_REQUEST)


    def post(self, request):
        try:
            token = request.META['HTTP_AUTHORIZATION'].split()[1]
            valid_data = VerifyJSONWebTokenSerializer().validate({'token': token})
            json_data = json.loads(request.body)
            data = valid_data['user'].user
            data.liked_animes.add(Anime.objects.all().get(pk=json_data['anime']))
            data.save()
            serializer = UserSerializer(instance=data)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response('No Auth', status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        try:
            token = request.META['HTTP_AUTHORIZATION'].split()[1]
            valid_data = VerifyJSONWebTokenSerializer().validate({'token': token})
            json_data = json.loads(request.body)
            data = valid_data['user'].user
            data.liked_animes.remove(Anime.objects.all().get(pk=json_data['anime']))
            data.save()
            serializer = UserSerializer(instance=data)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response('No Auth', status=status.HTTP_400_BAD_REQUEST)

class CommentAPIView(APIView):
    def get(self, request):
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        try:
            token = request.META.get('HTTP_AUTHORIZATION').split()[1]
            valid_data = VerifyJSONWebTokenSerializer().validate({'token': token})
            json_data = json.loads(request.body)
            data = {
                'user': valid_data['user'].user,
                'body': json_data['body'],
                'anime': Anime.objects.all().get(pk=json_data['anime'])
            }
            serializer = CommentSerializer(data=data)
            if serializer.is_valid():
                serializer.create(data)
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        try:
            token = request.META.get('HTTP_AUTHORIZATION').split()[1]
            valid_data = VerifyJSONWebTokenSerializer().validate({'token': token})
            json_data = json.loads(request.body)
            data = {
                'body': json_data['body']
            }
            comment = Comment.objects.all().get(pk=json_data['comment'])
            serializer = CommentSerializer(data=data, partial=True)
            if serializer.is_valid():
                serializer.update(comment, data)
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        try:
            token = request.META.get('HTTP_AUTHORIZATION').split()[1]
            valid_data = VerifyJSONWebTokenSerializer().validate({'token': token})
            json_data = json.loads(request.body)
            comment = Comment.objects.all().get(pk=json_data['id'])
            comment.delete()
            return Response('deleted', status=status.HTTP_200_OK)
        except Exception as e:
            return Response(e, status=status.HTTP_400_BAD_REQUEST)
