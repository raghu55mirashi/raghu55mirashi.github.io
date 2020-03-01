from rest_framework.decorators import api_view
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from .serializers import (PersonalDataSerializer, ContactUsSerializer,
                          EducationSerializer, ExperienceSerializer,
                          ProjectsSerializer, SkillsSerializer,
                          MyLinksSerializer)
from .models import (PersonalData, ContactUs, Education,
                     Experience, Projects, Skills, MyLinks)

# this api created seperately for create--anothor method of api creation


class Contactusview(CreateAPIView):
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsSerializer


@api_view(['GET'])
def personaldataview(request):
    if request.method == 'GET':
        records = PersonalData.objects.all()
        serializer = PersonalDataSerializer(records, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def educationview(request):
    if request.method == 'GET':
        records = Education.objects.all()
        serializer = EducationSerializer(records, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def experienceview(request):
    if request.method == 'GET':
        records = Experience.objects.all().order_by('-joined')
        serializer = ExperienceSerializer(records, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def projectsview(request):
    if request.method == 'GET':
        records = Projects.objects.all().order_by('-created_on')
        serializer = ProjectsSerializer(records, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def skillsview(request):
    if request.method == 'GET':
        records = Skills.objects.all()
        serializer = SkillsSerializer(records, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def mylinksview(request):
    if request.method == 'GET':
        records = MyLinks.objects.all()
        serializer = MyLinksSerializer(records, many=True)
        return Response(serializer.data)
