# Generated by Django 3.2 on 2021-04-30 12:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_auto_20210430_1210'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='liked_animes',
        ),
        migrations.AddField(
            model_name='anime',
            name='likes',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='liked_animes', to='main.user'),
        ),
    ]