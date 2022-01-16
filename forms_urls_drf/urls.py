"""forms_urls_drf URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path, include
from blog.api import views as api_views
from django.conf.urls.static import static
# from blog import views ToDoDetailView
import blog
from blog import apps
from blog.views import index
from forms_urls_drf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^$', index, name='index'),
    # re_path(r'^blog/', include(('blog.urls', 'blog'), namespace='blog')),
    path('blog/', include('blog.urls'), name='blog'),
    path("api/posts/",
         api_views.PostListView.as_view(),
         name="api_post_list"),
    path("api/comment/<pk>",
         api_views.CommentDetailView.as_view(),
         name="api_comment"),
    path('api/posts/<int:pk>',
         api_views.PostListUrlView.as_view(),
        name="api_post_detail"),
    # path('api/todo/<int:pk>', api_views.ToDoDetailView.as_view()),
    path('summernote/', include('django_summernote.urls')),
]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
                      path('__debug__/', include(debug_toolbar.urls)),
                  ] + urlpatterns
