from rest_framework import serializers
from .models import *

class GenreSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass


class FilmSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    mark = serializers.FloatField()
    photo = serializers.CharField()
    year = serializers.IntegerField()

    def create(self, validated_data):
        return Film.objects.create(**validated_data)

    def update(self, instance, validated_data):
        pass


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        depth = 2


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
        depth = 2

    # def create(self, validated_data):
    #     return Comment.objects.create(**validated_data)
    #
    # def update(self, instance, validated_data):
    #     pass

class AnimeSerializer(serializers.ModelSerializer):
    genres = GenreSerializer(read_only=True, many=True)
    comments = CommentSerializer(read_only=True, many=True)
    class Meta:
        model = Anime
        fields = '__all__' # ['name', 'episodes', 'mark', 'photo', ]
