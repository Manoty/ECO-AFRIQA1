# from argon2 import hash_password
from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify
from django.utils.translation import gettext_lazy as _
from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.conf import settings
from django.contrib.auth.models import User
from django.urls import reverse
import boto3
import re


"""
class AppUserManager(BaseUserManager):

    use_in_migrations = True

    def _create_user(self, email, name, phone, password, **extra_fields):

        values = [email, name, phone]
        field_value_map = dict(zip(self.model.REQUIRED_FIELDS, values))

        for field_name, value in field_value_map.items():
            if not value:
                raise ValueError('The {} value must be set'.format(field_name))

        email = self.normalize_email(email)

        user = self.model(
            email=email,
            name=name,
            phone=phone,
            **extra_fields
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_user(self, email, name, phone, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, name, phone, password, **extra_fields)

    def create_superuser(self, email, name, phone, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        
        return self._create_user(email, name, phone, password, **extra_fields)

class AppUser(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length=32, blank=False, null=False)
    name = models.CharField(max_length=50, blank=True)
    phone = models.CharField(max_length=30, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)

    objects = AppUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [
        'username', 
        'name',  
        'phone'
    ]

    def __str__(self):
        return self.email
"""
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15, blank=True, null=True)
    location = models.CharField(max_length=100, blank=True, null=True)
    remember_me = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username

class Garden(models.Model):
    name = models.CharField(max_length=100, default='DEFAULT VALUE')
    location = models.CharField(max_length=255)
    size = models.CharField(max_length=100)
    features = models.TextField()
    description = models.CharField(max_length=140, default='DEFAULT VALUE')

    def __str__(self):
        return self.location


class Service(models.Model):
    SERVICE_TYPES = (
        ('installation', 'Installation'),
        ('consultation', 'Consultation'),
        ('rental', 'Renting Equipment'),
        ('selling', 'Selling Equipment'),
    )
    type = models.CharField(max_length=50, choices=SERVICE_TYPES)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'{self.get_type_display()} - {self.price}'


class Blog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True,  # Allow null temporarily
                             blank=True)  # Allow blank temporarily
    title = models.CharField(max_length=200)
    content = models.TextField()
    comments = models.IntegerField(default=0)
    likes = models.IntegerField(default=0)
    shares = models.IntegerField(default=0)
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = _("Blog")
        verbose_name_plural = _("Blogs")

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

# Added models for Comment, Like, and Share.


class Comment(models.Model):
    blog = models.ForeignKey(
        Blog, related_name='blog_comments', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.content


class Like(models.Model):
    blog = models.ForeignKey(
        Blog, related_name='blog_likes', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('blog', 'user')


class Share(models.Model):
    blog = models.ForeignKey(
        Blog, on_delete=models.CASCADE, related_name='blog_shares')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    shared_at = models.DateTimeField(auto_now_add=True)


# Poll for voting yes / no maybe and others 
class Poll(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, related_name='polls', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    def total_votes(self):
        return self.votes.count()

    def vote_counts(self):
        return {
            'yes': self.votes.filter(choice='YES').count(),
            'no': self.votes.filter(choice='NO').count(),
            'maybe': self.votes.filter(choice='MAYBE').count(),
            'other': self.votes.filter(choice='OTHER').count(),
        }

class Vote(models.Model):
    YES = 'YES'
    NO = 'NO'
    MAYBE = 'MAYBE'
    OTHER = 'OTHER'

    CHOICES = [
        (YES, 'Yes'),
        (NO, 'No'),
        (MAYBE, 'Maybe'),
        (OTHER, 'Other'),
    ]

    poll = models.ForeignKey(Poll, related_name='votes', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='votes', on_delete=models.CASCADE)
    choice = models.CharField(max_length=10, choices=CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} voted {self.choice} on {self.poll.title}"
    


# Transporter verification 
class IDVerification(models.Model):
    ID_DOCUMENT_TYPES = [
        ('passport', 'Passport'),
        ('national_id', 'National ID'),
        ('driver_license', 'Driver License'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='id_verification')
    id_document_type = models.CharField(max_length=50, choices=ID_DOCUMENT_TYPES)
    id_document_number = models.CharField(max_length=100, unique=True)
    document_image = models.ImageField(upload_to='id_documents/')
    photo_image = models.ImageField(upload_to='id_photos/')
    is_verified = models.BooleanField(default=False)
    submitted_at = models.DateTimeField(auto_now_add=True)
    verified_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f'{self.user.username} - {self.id_document_type}'

    def verify_id_number(self):
        """
        Verifies the ID number format based on the document type.
        """
        id_number = self.id_document_number

        if self.id_document_type == 'passport':
            # Example: Validate passport number format (alphanumeric, 8-9 characters)
            return bool(re.match(r'^[A-Z0-9]{8,9}$', id_number))
        elif self.id_document_type == 'national_id':
            # Example: Validate national ID number (numeric, 9-12 digits)
            return bool(re.match(r'^\d{9,12}$', id_number))
        elif self.id_document_type == 'driver_license':
            # Example: Validate driver license number (alphanumeric, 6-9 characters)
            return bool(re.match(r'^[A-Z0-9]{6,9}$', id_number))
        return False

    def verify_photo(self):
        """
        Verifies that the photo matches the face in the document using Amazon Rekognition.
        """
        client = boto3.client(
            'rekognition',
            aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
            aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
            region_name=settings.AWS_REGION_NAME
        )

        with open(self.document_image.path, 'rb') as source_image_file:
            source_bytes = source_image_file.read()

        with open(self.photo_image.path, 'rb') as target_image_file:
            target_bytes = target_image_file.read()

        response = client.compare_faces(
            SourceImage={'Bytes': source_bytes},
            TargetImage={'Bytes': target_bytes},
            SimilarityThreshold=80  # Set similarity threshold
        )

        if response['FaceMatches']:
            # Return True if similarity is above the threshold
            return response['FaceMatches'][0]['Similarity'] > 80


# order models(Product, Category, Cart, Orders)
#  category model
class Category(models.Model):
    CATEGORY_CHOICES = [
        ('fruits','Fruits'),
        ('vegetables','Vegetables'),
        ('legumes','Legumes'),
        ('spices','Spices'),
    ]

    name = models.CharField(max_length=200, choices=CATEGORY_CHOICES, default='FR')
    # slug = models.SlugField(max_length=200, unique=True)

    class Meta:
        ordering = ['name']
        indexes = [models.Index(fields=['name'])]
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name
    
    # def get_absolute_url(self):
    #     return reverse('views:product_list_by_category',)
                    #    args=[self.slug])
    
# products model
class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)    #unclear usage?
    category = models.ForeignKey(Category,
                                 related_name='products',
                                 on_delete=models.CASCADE)
    slug = models.SlugField(max_length=200)
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to='products/',
                              blank=True)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10,
                                decimal_places=2)
    available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['name']
        indexes = [
            models.Index(fields=['id','slug']),
            models.Index(fields=['name']),
            models.Index(fields=['-created_at'])
        ]

    def __str__(self):
        return self.name
    
    # def get_absolute_url(self):
    #     return reverse('views:product_detail',
    #                 args=[self.id,self.slug])


# cart models
# order models

