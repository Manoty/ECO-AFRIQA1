# Generated by Django 5.0.6 on 2024-11-05 18:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('freshlyapp', '0006_merge_0004_quotation_0005_alter_farmingsystems_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='paid',
            field=models.BooleanField(default=False),
        ),
    ]