# Generated by Django 5.1 on 2024-08-27 21:58

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('freshlyapp', '0005_remove_poll_head_poll_created_by_vote_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='poll',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]