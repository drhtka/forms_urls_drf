# -*- coding: utf-8 -*-
from django import forms
from blog.models import Mypost

class CreateForms(forms.ModelForm):
    class Meta:
        model = Mypost
        fields = ('title', 'text', 'publish_date')
