# Generated by Django 4.1.7 on 2023-04-14 16:42

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('peliculas', '0004_peliculas_descripcion_peliculas_director_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='categoria',
            name='created',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='peliculas',
            name='ano',
            field=models.CharField(default=2022, max_length=160),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='peliculas',
            name='created',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]