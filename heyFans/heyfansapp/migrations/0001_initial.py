# Generated by Django 2.1.11 on 2019-08-10 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MyTable',
            fields=[
                ('MyName', models.CharField(max_length=50)),
                ('MyUniQID', models.CharField(max_length=50, primary_key=True, serialize=False)),
            ],
            options={
                'db_table': 'MyTable',
            },
        ),
    ]
