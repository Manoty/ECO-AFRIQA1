from datetime import timezone
from django.contrib import admin
from .models import *
from .models import IDVerification

# Register your models here.

from .models import Product, Garden, Service, Blog
#admin.site.register(AppUser)
admin.site.register(Product)
class ProductModelAdmin(admin.ModelAdmin):
    fields = ['name', 'description', 'price', 'image']

admin.site.register(Garden)
class GardenModelAdmin(admin.ModelAdmin):
    fields = ['name', 'location', 'size', 'description']

admin.site.register(Service)
class ServiceModelAdmin(admin.ModelAdmin):
    fields = ['type', 'description', 'price']

admin.site.register(Blog)
class BlogModelAdmin(admin.ModelAdmin):
    fields = ['id', 'title', 'content', 'slug', 'image', 'created_at', 'updated_at']

admin.site.register(Poll)
class PollModelAdmin(admin.ModelAdmin):
    fields = ['id', 'title', 'description', 'votes']



class IDVerificationAdmin(admin.ModelAdmin):
    list_display = ('user', 'id_document_type', 'id_document_number', 'is_verified', 'submitted_at', 'verified_at')
    list_filter = ('is_verified', 'id_document_type')
    search_fields = ('user__username', 'id_document_number')
    readonly_fields = ('submitted_at', 'verified_at', 'is_verified')
    fieldsets = (
        (None, {
            'fields': ('user', 'id_document_type', 'id_document_number', 'document_image', 'photo_image')
        }),
        ('Verification Info', {
            'fields': ('is_verified', 'submitted_at', 'verified_at')
        }),
    )

    def has_add_permission(self, request):
        # Prevents adding new verification records through the admin interface
        return False

    def has_delete_permission(self, request, obj=None):
        # Prevents deletion of verification records through the admin interface
        return False

admin.site.register(IDVerification, IDVerificationAdmin)
