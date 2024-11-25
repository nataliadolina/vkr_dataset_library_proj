from rest_framework import serializers
from rest_framework.fields import ReadOnlyField

from .models import Dataset, Status
from .models import Dataset_SubStatus


class DatasetSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField(allow_blank=True, allow_null=True)
    image = serializers.FilePathField("media/img/", allow_blank=True, allow_null=True)
    time_created = serializers.DateTimeField()
    status_name = serializers.CharField()
    substatus_name = serializers.SerializerMethodField()

    def get_substatus_name(self, obj):
        return obj["substatus_name"] if obj['substatus_name'] else []


class StatusesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = ('id', 'name', 'description')
