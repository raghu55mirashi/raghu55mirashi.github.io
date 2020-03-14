from django.db import models


class PersonalData(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    address = models.TextField()
    dateofbirth = models.DateField()
    designation = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    nationality = models.CharField(max_length=50)
    phone = models.CharField(max_length=100)
    spk_lng = models.CharField(max_length=50)
    summary = models.TextField()
    blog_url = models.URLField(max_length=200)
    latest_tech = models.TextField(default=None)
    image = models.ImageField(upload_to="pic")
    resume = models.FileField(upload_to="resume")

    class Meta:
        db_table = 'personal_data'
        verbose_name_plural = 'Personal Data'

    def __str__(self):
        return self.firstname


class ContactUs(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField(max_length=254)
    subject = models.CharField(max_length=100, blank=True)
    message = models.TextField()
    sent_time = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'contactus'
        verbose_name_plural = 'Contact Us'
        ordering = ['sent_time']

    def __str__(self):
        return self.username


class Education(models.Model):
    course = models.CharField(max_length=100)
    degree = models.CharField(max_length=100)
    pass_year = models.DateField()
    university = models.CharField(max_length=100)

    class Meta:
        db_table = 'education'
        verbose_name_plural = 'Education'

    def __str__(self):
        return self.course


class Experience(models.Model):
    company = models.CharField(max_length=100)
    designation = models.CharField(max_length=100)
    duration = models.CharField(max_length=50)
    joined = models.DateTimeField(auto_now_add=False)
    technology = models.CharField(max_length=200)
    summary = models.TextField()

    class Meta:
        db_table = 'experience'
        verbose_name_plural = 'Experience'

    def __str__(self):
        return self.company


class Projects(models.Model):
    project_name = models.CharField(max_length=100)
    client = models.CharField(max_length=100)
    technology = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    duration = models.CharField(max_length=50)
    created_on = models.DateTimeField(auto_now_add=False)
    image = models.ImageField(upload_to="project", blank=True)
    site_url = models.URLField(max_length=200, blank=True)

    class Meta:
        db_table = 'projects'
        verbose_name_plural = 'Projects'

    def __str__(self):
        return self.project_name


class Skills(models.Model):
    subject = models.CharField(max_length=100)
    stars = models.FloatField()

    class Meta:
        db_table = 'skills'
        verbose_name_plural = 'Skills'

    def __str__(self):
        return self.subject


class MyLinks(models.Model):
    site_name = models.CharField(max_length=100)
    site_url = models.URLField(max_length=200)

    class Meta:
        db_table = 'mylinks'
        verbose_name_plural = 'MyLinks'

    def __str__(self):
        return self.site_name
