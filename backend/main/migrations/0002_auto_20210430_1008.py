# Generated by Django 3.2 on 2021-04-30 10:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='anime',
            name='description',
            field=models.TextField(default=123),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='anime',
            name='duration',
            field=models.IntegerField(default=123),
            preserve_default=False,
        ),
    ]