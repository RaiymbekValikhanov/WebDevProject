from django.db import models
from django.contrib.auth.models import User as UserBase

class Genre(models.Model):
    name = models.CharField(max_length=100)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }

    def __str__(self):
        return f'{self.id}: {self.name}'


class Anime(models.Model):
    name = models.CharField(max_length=100)
    episodes = models.IntegerField()
    mark = models.FloatField()
    photo = models.TextField()
    genres = models.ManyToManyField(Genre)
    year = models.IntegerField()
    title_name = models.CharField(max_length=50)
    description = models.TextField()
    duration = models.IntegerField()

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'episodes': self.episodes,
            'mark': self.mark,
            'photo': self.photo,
            'year': self.year,
            'title_name': self.title_name
        }

    def __str__(self):
        return f'{self.id}: {self.name}'

class User(models.Model):
    # login = models.CharField(max_length=100)
    # password = models.CharField(max_length=20)
    user_instance = models.OneToOneField(UserBase, on_delete=models.CASCADE)
    liked_animes = models.ManyToManyField(Anime, related_name='likes', blank=True, null=True)
    # liked_animes = models.ForeignKey(Anime, on_delete=models.CASCADE, null=True)

    def to_json(self):
        return {
            'id': self.pk,
            'username': self.user_instance.name
        }

    def __str__(self):
        return f'{self.user_instance.username}'

class AnimeGenre(models.Model):
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE, null=True)
    anime = models.ForeignKey(Anime, on_delete=models.CASCADE, null=True)


class Film(models.Model):
    name = models.CharField(max_length=100)
    mark = models.FloatField()
    photo = models.TextField()
    year = models.IntegerField()

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'mark': self.mark,
            'photo': self.photo,
            'year': self.year
        }

    def __str__(self):
        return f'{self.id}: {self.name}'

class Comment(models.Model):
    body = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    anime = models.ForeignKey(Anime, on_delete=models.CASCADE, null=True, related_name='comments')

    def to_json(self):
        return {
            'id': self.id,
            'user': self.user,
            'body': self.body
        }
    def __str__(self):
        return f'{self.id}: {self.user}'