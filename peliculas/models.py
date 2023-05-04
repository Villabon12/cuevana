from django.db import models

# Create your models here.
class Categoria(models.Model):
    nombre = models.CharField(max_length=160)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Categoria {self.id}: {self.nombre}'
    
class Peliculas(models.Model):
    title = models.CharField(max_length=200)
    release_date = models.DateField
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    cover = models.ImageField(upload_to='covers/',null=True, blank=True)
    descripcion = models.TextField(default="Sin descripción")
    duracion = models.CharField(max_length=55)
    ano = models.CharField(max_length=160)
    director = models.CharField(max_length=160)
    created = models.DateTimeField(auto_now_add=True)
        
    categoria = models.ForeignKey(Categoria, on_delete=models.SET_NULL, null=True)
    # Set_Null deja todos los campos vacios del registro, cascade elimina todos los registros de la categoria eliminada
    
    def __str__(self):
        return f'Pelicula {self.id}: {self.title}, {self.categoria}, {self.rating}, {self.cover}, {self.descripcion}, {self.duracion}, {self.director}'