from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import RecipeSerializer, CategorySerializer
from .models import Recipe, Category


# data for create recipe operations(token required u can check in postman by adding to header key: Authorization, value: 'Bearer token')
# id - auto generated, image - not required, owner - id of user is auto generated by token, category_id - is also generated by his title
# {
    # "name": "Olivie",
    # "description": "New Year is coming!",
    # "steps": "123  123213",
    # "image": "https://www.gastronom.ru/binfiles/images/20201125/b9d2e6d3.jpeg",
    # "category_title": "Meat"
# }

# Create
class RecipeCreateAPIView(APIView):
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

# get category by his title
@api_view(['GET'])
def getCategoryByName(request,  name):
    categories = Category.objects.all()
    print(categories)
    category_cur = None
    for category in categories:
        if category.title == name:
            category_cur = category
    print(category_cur) 
    serializer = CategorySerializer(category_cur)
    return Response(serializer.data, status=status.HTTP_200_OK)


class CategoryAPIView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)