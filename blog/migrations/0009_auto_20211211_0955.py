# Generated by Django 3.1.3 on 2021-12-11 07:55

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0008_auto_20211211_0952'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mypost',
            name='publish_date',
            field=models.DateField(auto_created=True, default=datetime.date.today, verbose_name='Дата публикации'),
        ),
    ]
