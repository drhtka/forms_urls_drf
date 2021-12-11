# -*- coding: utf-8 -*-
from django import forms
from blog.models import Mypost

class CreateForms(forms.ModelForm):

    title = forms.CharField(label='Логин', widget=forms.TextInput(attrs={'class': 'form-control w-25', 'placeholder': 'Введите логин'}), max_length=12)

    class Meta:
            model = Mypost
            fields = ('title', 'text', 'publish_date', 'photo')
