from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    title = models.CharField(max_length=30)
    
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'


class Recipe(models.Model):
    username = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    description = models.TextField()
    steps = models.TextField()
    image = models.CharField(max_length=255, blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='recipes')


