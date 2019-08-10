from django.db import models

# Create your models here.
# Create your models here.
class MyTable(models.Model):
  MyName=models.CharField(max_length=50)
  MyUniQID = models.CharField(max_length=50, primary_key=True)

  def __unicode__(self):
      return self.MyName

  def __str__(self):
    return self.MyName

  class Meta(object):
      db_table="MyTable"