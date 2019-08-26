from django.db import models
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

class User(models.Model):
  UserID = models.IntegerField(primary_key=True)
  Name = models.CharField(max_length=50)

  def __unicode__(self):
    return self.Name

  def __str__(self):
    return self.Name

  class Meta(object):
      db_table="User"