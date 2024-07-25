from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import Product, Garden, Service, Blog
from .forms import ProductForm, ServiceRequestForm
from django.contrib import messages
from django.shortcuts import render, get_object_or_404, redirect
from .forms import BlogForm
from django.contrib.auth.views import PasswordResetView
from django.contrib.auth.forms import PasswordResetForm
from django.core.mail import send_mail
from django.urls import reverse_lazy
from rest_framework.response import Response
from .forms import SignUpForm
from django.contrib.auth.forms import AuthenticationForm
from rest_framework import generics, permissions
from rest_framework import viewsets
from rest_framework.decorators import api_view
from .models import Blog, Comment, Like, Share
from django.db.models import Q
from rest_framework.generics import get_object_or_404
from .serializers import BlogSerializer, ProductSerializer, GardenSerializer, CommentSerializer, LikeSerializer, ShareSerializer



# This is for typical django frontend html
@api_view(['GET'])
def home(request):
    return render(request, 'index.html')

@api_view(['GET'])
def about(request):
    return render(request, 'about.html')

@api_view(['GET'])
def blogs(request):
    return render(request, 'blogs.html')

def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('profile')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = SignUpForm()
    return render(request, '/SignUp/signUp.jsx', {'form': form})


@api_view(['GET'])
def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)

        if form.is_valid():
            if user is not None:
                login(request, user)
                return redirect('profile')
            else:
                if not User.objects.filter(username=username).exists():
                    messages.error(request, 'User does not exist. Please register.')
                else:
                    messages.error(request, 'Incorrect username or password.')
        else:
            messages.error(request, 'Incorrect username or password.')
    else:
        form = AuthenticationForm()

    return render(request, 'login.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('login')

@login_required
@api_view(['GET'])
def products(request):
    if request.method == 'POST':
        form = ProductForm(request.POST, request.FILES)
        if form.is_valid():
            product = form.save(commit=False)
            product.user = request.user
            product.save()
            return redirect('products')
    else:
        form = ProductForm()
    products = Product.objects.filter(user=request.user)
    return render(request, 'products.html', {'products': products, 'form': form})

@login_required
def services(request):
    if request.method == 'POST':
        form = ServiceRequestForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('services')
    else:
        form = ServiceRequestForm()
    services = Service.objects.all()
    return render(request, 'services.html', {'services': services, 'form': form})

@login_required
def profile(request):
    return render(request, 'profile.html')


# The blog CRUD 
@api_view(['GET'])
def blog_list(request):
    blogs = Blog.objects.all()
    return render(request, 'blog_list.html', {'blogs': blogs})

def blog_detail(request, slug):
    blog = get_object_or_404(Blog, slug=slug)
    return render(request, 'blog_detail.html', {'blog': blog})

def blog_create(request):
    if request.method == 'POST':
        form = BlogForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('blog_list')
    else:
        form = BlogForm()
    return render(request, 'blog_form.html', {'form': form})

def blog_update(request, slug):
    blog = get_object_or_404(Blog, slug=slug)
    if request.method == 'POST':
        form = BlogForm(request.POST, request.FILES, instance=blog)
        if form.is_valid():
            form.save()
            return redirect('blog_detail', slug=blog.slug)
    else:
        form = BlogForm(instance=blog)
    return render(request, 'blog_form.html', {'form': form})

def blog_delete(request, slug):
    blog = get_object_or_404(Blog, slug=slug)
    if request.method == 'POST':
        blog.delete()
        return redirect('blog_list')
    return render(request, 'blog_confirm_delete.html', {'blog': blog})

# Implemented views for CRUD operations and like/share actions


class BlogListCreateAPIView(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        search_query = self.request.query_params.get('search', None)
        if search_query:
            queryset = queryset.filter(
                Q(title__icontains=search_query) |
                Q(content__icontains=search_query)
            )
        return queryset


class BlogRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class CommentListCreateAPIView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class CommentRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class LikeCreateAPIView(generics.CreateAPIView):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ShareCreateAPIView(generics.CreateAPIView):
    queryset = Share.objects.all()
    serializer_class = ShareSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class CustomPasswordResetView(PasswordResetView):
    email_template_name = 'password_reset_email.html'
    success_url = reverse_lazy('password_reset_done')
    template_name = 'password_reset.html'
    form_class = PasswordResetForm

    def form_valid(self, form):
        email = form.cleaned_data['email']
        if User.objects.filter(email=email).exists():
            return super().form_valid(form)
        else:
            messages.error(self.request, 'No user is associated with this email address.')
            return self.form_invalid(form)
        

# serialiser 
class GardenListCreateAPIView(generics.ListCreateAPIView):
    queryset = Garden.objects.all()
    serializer_class = GardenSerializer

class GardenRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Garden.objects.all()
    serializer_class = GardenSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    lookup_field = 'slug'

    def retrieve(self, request, slug=None):
        queryset = self.get_queryset()
        blog = get_object_or_404(queryset, slug=slug)
        serializer = BlogSerializer(blog)
        return Response(serializer.data)