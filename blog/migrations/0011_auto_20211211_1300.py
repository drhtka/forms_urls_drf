# Generated by Django 3.1.3 on 2021-12-11 11:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0010_mypost_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mypost',
            name='photo',
            field=models.ImageField(blank=True, default='user_default_profile.jpg', null=True, upload_to='photo_blog/%Y/%m/%d'),
        ),
    ]