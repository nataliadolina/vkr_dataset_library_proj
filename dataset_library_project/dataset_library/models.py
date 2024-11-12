from django.db import models


class Status(models.Model):
    name = models.CharField(max_length=255, null=False, blank=False)
    description = models.TextField(blank=True, null=True)


class SubStatus(models.Model):
    name = models.CharField(max_length=255, null=False, blank=False)
    description = models.TextField(blank=True, null=True)
    status = models.ForeignKey(Status, on_delete=models.PROTECT)


class DataSource(models.Model):
    name = models.CharField(max_length=255)
    link = models.FilePathField()
    description = models.TextField(blank=True, null=True)


class DataRequest(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    time_created = models.DateTimeField(auto_now_add=True)
    image = models.FilePathField(blank=True, null=True)


class DataRequest_DataSource(models.Model):
    datasource_id = models.ForeignKey(DataSource, on_delete=models.PROTECT)
    datarequest_id = models.ForeignKey(DataRequest, on_delete=models.CASCADE)


class DataRequest_SubStatus(models.Model):
    substatus_id = models.ForeignKey(SubStatus, on_delete=models.PROTECT)
    datarequest_id = models.ForeignKey(DataRequest, on_delete=models.CASCADE)


class Dataset(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
    description = models.TextField(blank=True, null=True)
    datasource = models.OneToOneField(DataSource, on_delete=models.SET_NULL, blank=True, null=True)
    num_rows = models.BigIntegerField(blank=True, null=True)
    num_cols = models.IntegerField(blank=True, null=True)
    time_created = models.DateTimeField(auto_now_add=True)
    datarequest = models.ForeignKey(DataRequest, on_delete=models.SET_NULL, null=True, blank=True)
    status = models.ForeignKey(Status, on_delete=models.PROTECT)
    image = models.FilePathField(blank=True, null=True)


class Dataset_SubStatus(models.Model):
    substatus_id = models.ForeignKey(SubStatus, on_delete=models.PROTECT)
    dataset_id = models.ForeignKey(Dataset, on_delete=models.CASCADE)


'''
class DatasetFeature(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    min = models.FloatField(blank=True)
    max = models.FloatField(blank=True)
    mean = models.FloatField(blank=True)
    dataset = models.ForeignKey(Dataset, on_delete=models.CASCADE)
    type = models.OneToOneField('DatasetFeatureType', on_delete=models.PROTECT)
    diagram = models.OneToOneField('Diagram', on_delete=models.SET_NULL, null=True, blank=True)
    diagram_available = models.BooleanField(default=True)


class Diagram(models.Model):
    pass


class DiagramColumn(models.Model):
    name = models.CharField(max_length=255)
    from_ = models.CharField(max_length=255)
    to = models.CharField(max_length=255, null=True, blank=True)
    diagram = models.ForeignKey(Diagram, on_delete=models.CASCADE)
    value = models.IntegerField()


class DatasetFeatureType(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
'''
