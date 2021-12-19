# -*- coding: utf-8 -*-
from django import forms
from blog.models import Mypost

class CreateForms(forms.ModelForm):

    title = forms.CharField(label='Логин', widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Название'}), max_length=24)

    class Meta:
            model = Mypost
            fields = ('title', 'text', 'publish_date', 'photo')
