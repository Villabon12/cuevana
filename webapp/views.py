from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from peliculas.models import Peliculas, Categoria
from .form import SearchForm

# Create your views here.


def home(request):
    # return HttpResponse('Holiwis')
    form = SearchForm(request.GET or None)
    queryset = None
    estreno = None
    recomendado = None
    categoria = None

    if form.is_valid() and form.cleaned_data['query']:
        query = form.cleaned_data['query']
        queryset = Peliculas.objects.filter(title__icontains=query)
        estreno = Peliculas.objects.all()[:5]
        recomendado = Peliculas.objects.order_by("rating")[:5]
        categoria = Categoria.objects.order_by("nombre")
    else:
        queryset = Peliculas.objects.all()
        estreno = Peliculas.objects.all()[:5]
        recomendado = Peliculas.objects.order_by("-rating")[:5]
        categoria = Categoria.objects.order_by("nombre")

    context = {
        'form': form,
        'movies': queryset,
        'estreno': estreno,
        'recomendado': recomendado,
        'genero': categoria,
    }

    return render(request, 'home.html', context)


def peliculas_por_categoria(request, categoria_id):
    
    form = SearchForm(request.GET or None)
    categoria = get_object_or_404(Categoria, pk=categoria_id)
    genero = Categoria.objects.order_by("nombre")
    movies = Peliculas.objects.filter(categoria=categoria)
    estreno = Peliculas.objects.all()[:5]
    recomendado = Peliculas.objects.order_by("-rating")[:5]
    context = {
        'form': form,
        'categoria': categoria,
        'movies': movies,
        'estreno' : estreno,
        'recomendado' : recomendado,
        'genero': genero,
    }
    return render(request, 'search.html', context)


def pelicula_detalle(request, pelicula_id):
    form = SearchForm(request.GET or None)
    pelicula = get_object_or_404(Peliculas, pk=pelicula_id)
    estreno = Peliculas.objects.all()[:5]
    recomendado = Peliculas.objects.order_by("-rating")[:5]
    genero = Categoria.objects.order_by("nombre")

    
    # Obtiene otras películas en la misma categoría, excluyendo la película actual
    peliculas_recomendadas = Peliculas.objects.filter(categoria=pelicula.categoria).exclude(pk=pelicula_id)[:5]
    
    context = {
        'form': form,
        'pelicula': pelicula,
        'estreno' : estreno,
        'recomendado' : recomendado,
        'peliculas_recomendadas': peliculas_recomendadas,
        'genero': genero,

    }
    return render(request, 'single.html', context)