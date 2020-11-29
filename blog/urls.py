# -*- coding: utf-8 -*-
from blog.views import BlogList, PostDitail, CreatePost, EditPost, DelPost
from django.urls import path, re_path, include
app_name = 'blog'

urlpatterns = [

    re_path(r'^$', BlogList, name='blogs_list'),
    # re_path(r'^ditail/(?P<pk>[0-9]+)/$', PostDitail, name='ditail')
    path('ditail/<int:pk>/', PostDitail, name='ditail'),
    path('create/', CreatePost, name='create'),
    path('<int:pk>/edit/', EditPost, name='edit'),
    path('<int:pk>/delete/', DelPost, name='delete'),
    # url(r'^myac/new/$', 'myforact.views.myac_new', name='myac_new'),
    # url(r'^myac/(?P<pk>[0-9]+)/$', 'myforact.views.myac_detal', name='myac_detal'),
    # url(r'^myac/(?P<pk>[0-9]+)/edit/$', 'myforact.views.myac_edit', name='myac_edit'),
    # url(r'^myac/(?P<pk>[0-9]+)/del/$', 'myforact.views.myac_delete', name='myac_delete'),
]

