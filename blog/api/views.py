# -*- coding: utf-8 -*-
from django.db.models import Q
from django.http import request, JsonResponse
from django.shortcuts import render, get_object_or_404
from rest_framework import generics, status
from rest_framework.parsers import FileUploadParser, FormParser, MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView

from blog.models import Mypost, Comment
from blog.api.serializers import PostSerializer, CommentSerializer

class PostListView(APIView):
    # parser_classes = (FormParser, MultiPartParser)


    def get(self, request):
        # выводим все посты  апи
        items = Mypost.objects.all()
        serializer = PostSerializer(items, many=True)
        return Response(serializer.data)

    def post(self, request):
        print('POST')
        print(request.data)
        # добавляем пост
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            print(serializer.errors)
            serializer.save()
            print('save')
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CommentDetailView(generics.RetrieveAPIView):
    # выводим все коменты апи
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class PostListUrlView(APIView):
    #queryset = Post.objects.filter(title='first news')
    # выводим один пост по айди

    def get(self, request, pk):
        posts = Mypost.objects.filter(id=pk)

        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def put(self, request, pk):
        print('put')
        print(request.POST)
        photo =request.POST['photo']
        title =request.POST['title']
        text =request.POST['text']

        #  photo_blog/2021/12/15/069.jpg
        snippet = get_object_or_404(Mypost, pk=pk)
        serializer = PostSerializer(snippet, data=request.data)
        # print('serializer')
        # print(serializer)
        if serializer.is_valid():
            print("1")
            # if request.POST['photo'] != ['undefined']:
            # print(serializer.errors)
            serializer.save()
            return Response(serializer.data)
        else:
            my_photo = Mypost.objects.filter(pk=pk).values('photo')
            print('my_photo')
            print(my_photo[0]['photo'])
            print("2")
            if title == '' or text == '':
                return JsonResponse({'res': '0'})
            else:
                Mypost.objects.filter(pk=pk).update(title=request.POST['title'], text=request.POST['text'], photo=my_photo[0]['photo']) #, photo=request.POST['photo']
                return Response(serializer.data)
            #return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def delete(self, request, pk):
        snippet = get_object_or_404(Mypost, pk=pk)
        serializer = PostSerializer(snippet)
        data = serializer.data
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



# class PostListUrlView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Mypost.objects.all()
#     serializer_class = CommentSerializer

