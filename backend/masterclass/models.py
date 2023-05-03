from django.db import models
from django.contrib.auth.models import User


class masterClass(models.Model):
    name = models.CharField(max_length=50)
    date = models.DateField()
    duration = models.IntegerField()
    location = models.CharField(max_length=80)
    description = models.TextField()
    image = models.CharField(max_length=1000, blank=True, null=True)
    price = models.IntegerField()
    maxAttendees = models.IntegerField()
    participants = models.IntegerField(blank=True)


