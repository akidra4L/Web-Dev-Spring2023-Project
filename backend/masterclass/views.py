from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import masterClass
from .serializers import masterClassSerializer

# list of master classes
@api_view(['GET'])
def masterclass_list(request):
    masterclasses = masterClass.objects.all()
    serializer = masterClassSerializer(masterclasses, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


# datas for create masterclass operation
# {
#         "id": 4,   # auto generated
#         "name": "Cooking Masterclass",
#         "date": "2022-06-15",
#         "duration": 120,
#         "location": "123 Main St, Anytown USA",
#         "description": "Learn how to cook like a pro!",
#         "image": null,  # not required
#         "price": 50,
#         "maxAttendees": 20,
#         "participants": []   # either required or not
# }

# create for master class
@api_view(['POST'])
def masterclass_create(request):
    serializer = masterClassSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

# rud operations for master class
@api_view(['GET', 'PUT', 'DELETE'])
def masterclass_detail(request, id):
    try:
        masterclass = masterClass.objects.get(id=id)
    except masterClass.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = masterClassSerializer(masterclass)
        return Response(serializer.data,status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = masterClassSerializer(masterclass, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        masterclass.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)