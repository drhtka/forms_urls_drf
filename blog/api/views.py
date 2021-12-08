# -*- coding: utf-8 -*-
from django.db.models import Q
from django.http import request
from django.shortcuts import render, get_object_or_404
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

from blog.models import Mypost, Comment
from blog.api.serializers import PostSerializer, CommentSerializer

class PostListView(APIView):

    def get(self, request):
        # выводим все посты  апи
        items = Mypost.objects.all()
        serializer = PostSerializer(items, many=True)
        return Response(serializer.data)

    def post(self, request):
        # добавляем пост
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
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
        snippet = get_object_or_404(Mypost, pk=pk)
        serializer = PostSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        snippet = get_object_or_404(Mypost, pk=pk)
        serializer = PostSerializer(snippet)
        data = serializer.data
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

