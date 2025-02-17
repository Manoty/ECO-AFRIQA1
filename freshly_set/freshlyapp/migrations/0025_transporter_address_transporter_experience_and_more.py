# Generated by Django 5.1.1 on 2024-11-22 08:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('freshlyapp', '0024_product_original_qtty_product_used_for'),
    ]

    operations = [
        migrations.AddField(
            model_name='transporter',
            name='address',
            field=models.TextField(blank=True, help_text='Address of the Transporter', null=True),
        ),
        migrations.AddField(
            model_name='transporter',
            name='experience',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='transporter',
            name='id_back',
            field=models.ImageField(blank=True, null=True, upload_to='static/images/Transporters'),
        ),
        migrations.AddField(
            model_name='transporter',
            name='id_front',
            field=models.ImageField(blank=True, null=True, upload_to='static/images/Transporters'),
        ),
        migrations.AddField(
            model_name='transporter',
            name='vehicle',
            field=models.CharField(blank=True, choices=[('Van', 'Van'), ('Lorry', 'Lorry'), ('Motorbike', 'Motorbike'), ('Bicycle', 'Bicycle'), ('Pick-up', 'Pick-up'), ('Pro-box', 'Pro-box'), ('Tuk-Tuk', 'Tuk-Tuk')], max_length=20, null=True),
        ),
    ]
