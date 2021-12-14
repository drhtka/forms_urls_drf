#-*- coding: utf-8 -*-
from django.shortcuts import render
from django.shortcuts import render, redirect, get_object_or_404, HttpResponseRedirect, HttpResponse
from blog.models import Mypost
from blog.forms import CreateForms
# Create your views here.

def BlogList(request):
    all_posts = Mypost.objects.all()
    # print('all_posts_all')
    # print(all_posts)
    context = {'all_posts': all_posts}
    return render(request, 'blogs_list.html', context)

def PostDitail(request, pk):
    post_ditail = Mypost.objects.all().filter(pk=pk)
    # print('post_ditail')
    # print(post_ditail[0])
    return render(request, 'blog_ditail.html', {'post_ditail': post_ditail[0]})

def CreatePost(request):
    if request.method == 'POST':
        form = CreateForms(request.POST, request.FILES)
        if form.is_valid():
            create_post = form.save(commit=False)
            create_post.author = request.user
            create_post.save()
            return redirect('blog:ditail', pk=create_post.pk)
    else:
        form = CreateForms

    return render(request, 'create.html', {'form': form})

def EditPost(request, pk):
    # edit_post1 = get_object_or_404(Mypost, pk=pk)

    edit_post = Mypost.objects.filter(pk=pk).get()
    if request.method == 'POST':
        form = CreateForms(request.POST, request.FILES, instance=edit_post)
        # print('form')
        # print(form)

        if form.is_valid():
            edit = form.save(commit=False)
            # edit.author = request.user
            # print('edit.author')
            # print(edit.author)
            edit.save()
            return redirect('blog:ditail', pk=edit.pk)
    else:
        form = CreateForms(instance=edit_post)

    return render(request, 'edit.html', {'form': form})

def DelPost(request, pk):
    del_post = Mypost.objects.get(pk=pk)
    if request.method == 'POST':
        form = CreateForms(request.POST, instance=del_post)
        if form.is_valid():
            del_post = form.save(commit=False)
            del_post.delete()
            return redirect('blog:blogs_list')
    else:
        form = CreateForms(instance=del_post)
    return render(request, 'delete.html', {'form': form})

def PagePostApi(request):

    if request.method == 'POST':
        form = CreateForms(request.POST)
        if form.is_valid():
            create_post = form.save(commit=False)
            create_post.author = request.user
            create_post.save()
            return redirect('blog:ditail', pk=create_post.pk)
    else:
        form = CreateForms
    return render(request, 'post_api.html', {'form': form} )

def ApiBlogjs(request):
    return render(request, 'apiblogjs.html', )


def ApiCreateblogjs(request):
    return render(request, 'apicreateblogjs.html',)

def ApiDetailblogjs(request, pk):

    post_ditail = Mypost.objects.all().filter(pk=pk)

    return render(request, 'apidetailblogjs.html',{'post_ditail': post_ditail[0]})