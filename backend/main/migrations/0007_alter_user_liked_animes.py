# Generated by Django 3.2 on 2021-04-30 16:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_auto_20210430_1244'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='liked_animes',
            field=models.ManyToManyField(blank=True, null=True, related_name='likes', to='main.Anime'),
        ),
    ]