from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RecipeSerializer, CategorySerializer
from .models import Recipe, Category
from django.http import JsonResponse
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404



# Create
class RecipeCreateAPIView(APIView):
    # permission_classes = [IsAuthenticated]
    def post(self, request):
        category_title = request.data.get('category_title')
        category = get_object_or_404(Category, title = category_title)
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=request.user, category = category)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
# Read - all list of recipes
class RecipeListAPIView(APIView):
    def get(self, request):
        recipes = Recipe.objects.all()
        serializer = RecipeSerializer(recipes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    

# Read, Update, Delete The Recipe
class recipeDetailAPIView(APIView):
    def get(self, request, id):
        recipe = Recipe.objects.get(id = id)
        serializer = RecipeSerializer(recipe)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, id):
        recipe = Recipe.objects.get(id = id)
        serializer = RecipeSerializer(recipe, request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id):
        recipe = Recipe.objects.get(id = id)
        recipe.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    



# List of categories
# Possible categories - Salad, Burger, Meal, Pizza, Soup
def listCategories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many = True)
    return JsonResponse(serializer.data, safe=False)


def getCategoryByName(request,  name):
    print(name)
    categories = Category.objects.all()
    for category in categories:
        if category.title == name:
            category_cur = category 
    serializer = CategorySerializer(category_cur)
    return JsonResponse(serializer.data, safe=False)
