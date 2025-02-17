# Generated by Django 5.0.6 on 2024-11-05 18:41

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('freshlyapp', '0007_order_paid'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='PaymentMethod',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('method', models.CharField(choices=[('credit_card', 'Credit Card'), ('mpesa', 'Mpesa')], max_length=20)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='payment_method', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='MpesaDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone_number', models.CharField(max_length=15)),
                ('account_name', models.CharField(blank=True, max_length=100, null=True)),
                ('payment_method', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='mpesa_details', to='freshlyapp.paymentmethod')),
            ],
        ),
        migrations.CreateModel(
            name='CreditCardDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('card_number', models.CharField(max_length=16)),
                ('expiry_date', models.DateField()),
                ('card_holder_name', models.CharField(max_length=100)),
                ('cvv', models.CharField(max_length=4)),
                ('payment_method', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='credit_card_details', to='freshlyapp.paymentmethod')),
            ],
        ),
    ]
