from .views import personaldataview, contactusview, educationview, experienceview, projectsview, skillsview, mylinksview
from django.urls import path


urlpatterns = [
    path('personaldata', personaldataview, name="personaldataview"),
    path('contactus', contactusview, name="contactusview"),
    path('education', educationview, name="educationview"),
    path('experience', experienceview, name="experienceview"),
    path('projects', projectsview, name="projectsview"),
    path('skills', skillsview, name="skillsview"),
    path('mylinks', mylinksview, name="mylinksview"),
]
