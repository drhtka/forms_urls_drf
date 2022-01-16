#-*- coding: utf-8 -*-
import datetime
#from datetime import datetime

from django.db import models
from django.utils import timezone

class Mypost(models.Model):
    class Meta:
        db_table = 'myforact_app'
        verbose_name_plural = 'Активные формы'

    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    title = models.CharField('Заголовок', max_length=12)
    text = models.TextField('Запись', blank=False)
    # created_date = models.DateTimeField(default=timezone.now)
    publish_date = models.DateField('Дата публикации', auto_created=True, default=datetime.date.today)
    # publish_date = models.DateField(blank=True, null=True, auto_created=True)
    photo = models.ImageField(upload_to='photo_blog/%Y/%m/%d', blank=True, null=True, default='user_default_profile.jpg',)
    done = models.BooleanField(default=False)

    def publish(self):
        self.publish_date=timezone.now()
        self.save()

    def __str__(self):
        # return self.title
        return f'My post: {self.title}({"" if self.done else "not"}done)'

class Comment(models.Model):

    class Meta:
        verbose_name_plural = 'Комментарии'

    blogpost = models.ForeignKey(Mypost, related_name='comments', on_delete=models.CASCADE)
    comment = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    def __int__(self):
        return self.id


class MainPage(models.Model):

    class Meta:
        verbose_name = 'Текст на главной'
        verbose_name_plural = 'Текст на главной'

    title = models.CharField('Заголовок', max_length=120)
    text = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    done = models.BooleanField('Активный', default=False)

    def __str__(self):
        return self.title