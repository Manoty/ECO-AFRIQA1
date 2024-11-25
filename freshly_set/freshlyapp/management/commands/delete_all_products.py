from django.core.management.base import BaseCommand
from freshlyapp.models import Product

class Command(BaseCommand):
    help = 'Delete all products from the database'

    def handle(self, *args, **kwargs):
        # Confirm before deleting all products
        confirm = input("Are you sure you want to delete all products? This action cannot be undone. Type 'yes' to continue: ")

        if confirm.lower() == 'yes':
            count, _ = Product.objects.all().delete()  # Returns a tuple (count, details)
            self.stdout.write(self.style.SUCCESS(f"Successfully deleted {count} products."))
        else:
            self.stdout.write(self.style.WARNING("Operation canceled. No products were deleted."))
