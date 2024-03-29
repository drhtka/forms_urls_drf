# Generated by Django 3.1.3 on 2021-12-11 14:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0011_auto_20211211_1300'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mypost',
            name='photo',
            field=models.ImageField(default='user_default_profile.jpg', upload_to='photo_blog/%Y/%m/%d'),
        ),
        migrations.AlterField(
            model_name='mypost',
            name='title',
            field=models.CharField(max_length=12, verbose_name='Заголовок'),
        ),
    ]
