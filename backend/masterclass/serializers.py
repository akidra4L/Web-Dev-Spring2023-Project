from rest_framework import serializers

from django.shortcuts import get_object_or_404

from .models import masterClass

class masterClassSerializer(serializers.ModelSerializer):
    date = serializers.DateField(format='%Y-%m-%d')
    class Meta:
        model = masterClass
        fields = '__all__'




