from django.contrib import admin
from .models import Peliculas
from .models import Categoria

# Register your models here.
admin.site.register(Peliculas)
admin.site.register(Categoria)
