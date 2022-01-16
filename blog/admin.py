#-*- coding: utf-8 -*-
from django.contrib import admin
from blog.models import Mypost, Comment, MainPage
from django_summernote.admin import SummernoteModelAdmin
# Register your models here.

class MypostAdmin(admin.ModelAdmin):
    list_display = ('author', 'id', 'title', 'done')
    fields = ('id', 'title')
    list_editable = ['title', 'done']

class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'created')

class MainPageAdmin(SummernoteModelAdmin):
    list_display = ('id', 'created', 'title', 'done')
    list_editable = ['title', 'done']
    list_display_links = ('created',)
    summernote_fields = ('text')

admin.site.register(Mypost, MypostAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(MainPage, MainPageAdmin)