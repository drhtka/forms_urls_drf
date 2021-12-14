# -*- coding: utf-8 -*-
from rest_framework import serializers
from rest_framework.reverse import reverse

from blog.models import Mypost, Comment


class PostSerializer(serializers.ModelSerializer):
        class Meta:
                model = Mypost
                fields = ('author', 'id', 'title', 'text', 'publish_date', 'done', 'photo')
                ordering = ('-publish_date',)
                # done = serializers.BooleanField(required=False, default=False)
                done = serializers.BooleanField(required=True)


class CommentSerializer(serializers.ModelSerializer):
        class Meta:
                model = Comment
                fields = ('blogpost', 'comment', 'created',)
                ordering = ('-created',)

