from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    category_id = models.IntegerField()
    title = models.CharField(max_length=30)


    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name_plural = 'Categories'


class Recipe(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    steps = models.TextField()
    image = models.ImageField(blank=True, null=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='recipes')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='recipes')
    category = Category.title

