# Generated by Django 5.1.1 on 2024-11-20 15:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('freshlyapp', '0019_alter_gardensystems_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='farmer',
            name='address',
            field=models.TextField(blank=True, help_text='Address of the farmer', null=True),
        ),
        migrations.AddField(
            model_name='farmer',
            name='farm_size',
            field=models.DecimalField(blank=True, decimal_places=2, help_text='Size of the farm in acres', max_digits=10, null=True),
        ),
        migrations.AddField(
            model_name='farmer',
            name='farming_system',
            field=models.CharField(blank=True, choices=[('Traditional', 'Traditional'), ('Modern', 'Modern'), ('Sustainable', 'Sustainable'), ('Innovative', 'Innovative')], max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='farmer',
            name='garden_setup',
            field=models.CharField(blank=True, choices=[('Urban', 'Urban'), ('Specialized', 'Specialized'), ('Traditional', 'Traditional'), ('Modern', 'Modern'), ('Tuk-Tuk', 'Tuk-Tuk')], max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='farmer',
            name='main_crop',
            field=models.CharField(blank=True, help_text='Primary crop grown by the farmer', max_length=255, null=True),
        ),
    ]