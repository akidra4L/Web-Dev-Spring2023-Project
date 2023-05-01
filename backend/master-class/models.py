from django.db import models
from django.contrib.auth.models import User


class masterClass(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    image = models.ImageField()
    date = models.DateTimeField()
    participants = models.ManyToManyField(User)



class Comment(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    master_class = models.ForeignKey(masterClass, on_delete=models.CASCADE)
    text = models.TextField()

