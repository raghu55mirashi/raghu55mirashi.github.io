from .views import (personaldataview, Contactusview, educationview,
                    experienceview, projectsview, skillsview, mylinksview)

from django.urls import path


urlpatterns = [
    path('personaldata', personaldataview, name="personaldataview"),
    path('education', educationview, name="educationview"),
    path('experience', experienceview, name="experienceview"),
    path('projects', projectsview, name="projectsview"),
    path('skills', skillsview, name="skillsview"),
    path('mylinks', mylinksview, name="mylinksview"),
    path('contactus', Contactusview.as_view()),  # used for CreateAPIView class
]
