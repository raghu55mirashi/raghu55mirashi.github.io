from .models import (PersonalData, ContactUs, Education,
                     Experience, Projects, Skills, MyLinks)
from rest_framework.serializers import ModelSerializer


class PersonalDataSerializer(ModelSerializer):
    class Meta:
        model = PersonalData
        fields = '__all__'


class ContactUsSerializer(ModelSerializer):
    class Meta:
        model = ContactUs
        fields = '__all__'


class EducationSerializer(ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'


class ExperienceSerializer(ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'


class ProjectsSerializer(ModelSerializer):
    class Meta:
        model = Projects
        fields = '__all__'


class SkillsSerializer(ModelSerializer):
    class Meta:
        model = Skills
        fields = '__all__'


class MyLinksSerializer(ModelSerializer):
    class Meta:
        model = MyLinks
        fields = '__all__'
