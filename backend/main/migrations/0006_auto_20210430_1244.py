# Generated by Django 3.2 on 2021-04-30 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_auto_20210430_1228'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='anime',
            name='likes',
        ),
        migrations.AddField(
            model_name='user',
            name='liked_animes',
            field=models.ManyToManyField(related_name='likes', to='main.Anime'),
        ),
    ]
