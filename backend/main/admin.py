from django.contrib import admin

from main.models import Anime, Film, User, Genre, Comment
from rest_framework_jwt.serializers import JSONWebTokenSerializer

@admin.register(Anime)
class AnimeAdmin(admin.ModelAdmin):
    list_display = ('name', 'episodes', 'mark', 'year', )
    search_fields = ('name',)
    list_filter = ('genres',)


@admin.register(Genre)
class GenreAdmin(admin.ModelAdmin):
    list_display = ('name', )
    search_fields = ('name',)


@admin.register(Film)
class FilmAdmin(admin.ModelAdmin):
    list_display = ('name', 'mark', 'year', )
    search_fields = ('name',)


# admin.site.register(User)
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('user_instance', 'get_liked_animes')

    def get_liked_animes(self, obj):
        return [anime.name for anime in obj.liked_animes.all()]


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('user', 'anime', 'body')
