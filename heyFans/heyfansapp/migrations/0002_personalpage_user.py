# Generated by Django 2.1.11 on 2019-08-26 17:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('heyfansapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='PersonalPage',
            fields=[
                ('UID', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('Name', models.CharField(max_length=20)),
                ('Tag', models.CharField(max_length=2)),
                ('time', models.DateField(max_length=2)),
            ],
            options={
                'db_table': 'Name',
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('UserID', models.IntegerField(primary_key=True, serialize=False)),
                ('Name', models.CharField(max_length=50)),
            ],
            options={
                'db_table': 'User',
            },
        ),
    ]