#-*- coding: utf-8 -*-
from django.contrib import admin
from blog.models import Mypost, Comment
# Register your models here.

class MypostAdmin(admin.ModelAdmin):
    list_display = ('id', 'author', 'done')

class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'created')

admin.site.register(Mypost, MypostAdmin)
admin.site.register(Comment, CommentAdmin)