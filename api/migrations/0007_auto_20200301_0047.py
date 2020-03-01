# Generated by Django 3.0.3 on 2020-02-29 19:17

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20200224_1240'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='contactus',
            options={'ordering': ['sent_time'], 'verbose_name_plural': 'Contact Us'},
        ),
        migrations.AlterModelOptions(
            name='education',
            options={'verbose_name_plural': 'Education'},
        ),
        migrations.AlterModelOptions(
            name='experience',
            options={'verbose_name_plural': 'Experience'},
        ),
        migrations.AlterModelOptions(
            name='mylinks',
            options={'verbose_name_plural': 'MyLinks'},
        ),
        migrations.AlterModelOptions(
            name='personaldata',
            options={'verbose_name_plural': 'Personal Data'},
        ),
        migrations.AlterModelOptions(
            name='projects',
            options={'verbose_name_plural': 'Projects'},
        ),
        migrations.AlterModelOptions(
            name='skills',
            options={'verbose_name_plural': 'Skills'},
        ),
        migrations.AddField(
            model_name='personaldata',
            name='latest_tech',
            field=models.TextField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='contactus',
            name='message',
            field=models.TextField(default=None),
        ),
    ]