import random
from django.contrib.auth.models import User
from .models import Transporter, Order, Profile  # Adjust import paths as necessary

def assign_order_to_transporter(user, order):
    # 1. Retrieve all users who have an associated Transporter object
    transporters = Transporter.objects.filter(user__isnull=False).select_related('user')

    if not transporters.exists():
        raise ValueError("No transporters available")

    # 2. Randomly select one transporter
    selected_transporter = random.choice(transporters)

    # 3. Update the order with the selected transporter's details
    order.status = 'Transporting'
    order.transporter = selected_transporter

    # Set customer information based on the provided user and user's profile
    profile = Profile.objects.get(user=user)
    order.customer_name = user.get_full_name() or user.first_name
    order.customer_email = user.email
    order.customer_phone = profile.phone

    # Save the modified order
    order.save()

    return order
