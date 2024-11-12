from django.db.models import OuterRef, Subquery
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import *
from .models import Dataset, Dataset_SubStatus, SubStatus, Status
import pdb

from .sql_request import get_datasets_with_status_and_substatus_sql


# Create your views here.
@api_view(["GET"])
def dataset_list(request):
    if request.method == "GET":
        data = get_datasets_with_status_and_substatus_sql()
        serializer = DatasetSerializer(data, context={"request": request}, many=True)
        return Response(serializer.data)


@api_view(["GET"])
def statuses(request):
    if request.method == "GET":
        data = Status.objects.all()
        print(data)
        serializer = StatusesSerializer(data, context={"request": request}, many=True)
        return Response(serializer.data)


@api_view(["GET", "PUT", "DELETE"])
def dataset_detail(request, id):
    """
    try:
        dataset = Dataset.objects.get(id=id)
    except Dataset.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == "GET":
        serializer = DatasetSerializer(dataset, context={"request": request}, many=False)
        return Response(serializer.data)
    if request.method == "PUT":
        serializer = DatasetSerializer(dataset, data=request.data, context={request.request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        dataset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    """
