from rest_framework import serializers

from django.shortcuts import get_object_or_404

from .models import Recipe, Category

class RecipeSerializer(serializers.Serializer):
    username = serializers.CharField()
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    description = serializers.CharField()
    steps = serializers.CharField()
    image = serializers.CharField(required=False)
    category_id = serializers.PrimaryKeyRelatedField(read_only = True)
    category_title = serializers.CharField(source='category.title', read_only=True)
    
    def create(self, validated_data):
        recipe = Recipe.objects.create(**validated_data)
        return recipe

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.steps = validated_data.get('steps', instance.steps)
        instance.image = validated_data.get('image', instance.image)
        instance.save()
        return instance




class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(max_length=100)

    def create(self, validated_data):
        return Category.objects.create(**validated_data)
