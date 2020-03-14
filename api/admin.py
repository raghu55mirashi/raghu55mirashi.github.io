from django.contrib import admin
from django.contrib.admin import ModelAdmin
from .models import (PersonalData, ContactUs, Education, Experience,
                     Projects, Skills, MyLinks)


class ModelPersonalData(ModelAdmin):
    list_display = ('firstname', 'lastname', 'address', 'dateofbirth', 'designation',
                    'email', 'phone', 'blog_url', 'latest_tech', 'summary', 'image', 'resume')


class ModelContactUs(ModelAdmin):
    list_display = ('username', 'email', 'subject', 'message', 'sent_time')


class ModelEducation(ModelAdmin):
    list_display = ('course', 'degree', 'pass_year', 'university')


class ModelExperience(ModelAdmin):
    list_display = ('company', 'designation',
                    'duration', 'joined', 'technology', 'summary')


class ModelProjects(ModelAdmin):
    list_display = ('project_name', 'client', 'technology','description',
                    'duration', 'created_on', 'image', 'site_url')


class ModelSkills(ModelAdmin):
    list_display = ('subject', 'stars')


class ModelMyLinks(ModelAdmin):
    list_display = ('site_name', 'site_url')


admin.site.register(PersonalData, ModelPersonalData)
admin.site.register(ContactUs, ModelContactUs)
admin.site.register(Education, ModelEducation)
admin.site.register(Experience, ModelExperience)
admin.site.register(Projects, ModelProjects)
admin.site.register(Skills, ModelSkills)
admin.site.register(MyLinks, ModelMyLinks)
