from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def health_check(request):
    return Response({
        "status": "success",
        "message": "Backend is working successfully!",
        "project": "Multilingual Public Awareness Platform"
    })
