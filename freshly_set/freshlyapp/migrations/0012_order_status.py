# Generated by Django 5.0.6 on 2024-11-09 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('freshlyapp', '0011_transporter'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='status',
            field=models.CharField(choices=[('Ready', 'Ready'), ('Packaging', 'Packaging'), ('Transporting', 'Transporting')], default='Packaging', max_length=20),
        ),
    ]