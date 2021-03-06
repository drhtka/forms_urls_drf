#-*- coding: utf-8 -*-
from django.db import models
from django.utils import timezone

class Mypost(models.Model):
    class Meta:
        db_table = 'myforact_app'
        verbose_name_plural = 'Активные формы'

    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField(blank=False)
    # created_date = models.DateTimeField(default=timezone.now)
    publish_date = models.DateField(blank=True, null=True)
    done = models.BooleanField(default=False)

    def publish(self):
        self.publish_date=timezone.now()
        self.save()

    def __str__(self):
        # return self.title
        return f'My post: {self.text}({"" if self.done else "not"}done)'

class Comment(models.Model):
    blogpost = models.ForeignKey(Mypost, related_name='comments', on_delete=models.CASCADE)
    comment = models.TextField()
    created = models.DateTimeField(auto_now_add=True)