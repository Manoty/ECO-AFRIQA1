from .serializers import ConsultantSerializer
from .models import Consultant
from .serializers import OrderSerializer
from .models import Order
from .serializers import FAQMainPageSerializer
from .models import FAQMainPage
from .serializers import FAQSerializer
from .models import FAQ  # Assuming your FAQ model is named FAQ
from .models import *
from .serializers import FarmerSerializer, OrderItemSerializer
from .serializers import UserProfileSerializer
import json
from .models import CartItem
from .serializers import CartSerializer, CartItemSerializer
from rest_framework.pagination import PageNumberPagination
from .serializers import ProductSerializer
from django.shortcuts import render, redirect
from django.middleware.csrf import get_token
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseNotAllowed, JsonResponse
from .models import Product, Garden, Service, Blog, Banner
from .forms import ProductForm, ServiceRequestForm
from django.contrib import messages
from django.shortcuts import render, get_object_or_404, redirect
from .forms import BlogForm
from django.contrib.auth.views import PasswordResetView
from django.contrib.auth.forms import PasswordResetForm
from django.core.mail import send_mail
from django.urls import reverse_lazy
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework import generics, permissions
from rest_framework import viewsets
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.views import APIView
from .models import Blog, Comment, Like, Share, Poll, Vote, IDVerification, Cart, Category, Notification, Order, OrderItem, Product
from django.db.models import Q
from rest_framework.generics import get_object_or_404
from .serializers import BlogSerializer, ProductSerializer, GardenSerializer, CommentSerializer, LikeSerializer, ShareSerializer, PollSerializer, VoteSerializer, IDVerificationSerializer, CartSerializer, BannerSerializer, CategorySerializer, NotificationSerializer
from django.shortcuts import render
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions, status
from django.contrib.auth import get_user_model, login, logout
from .serializers import UserRegisterSerializer, UserLoginSerializer, UserSerializer, OrderSerializer
from rest_framework.validators import UniqueValidator
# Import your custom validation here
from .validators import custom_validation, validate_email, validate_password
# csrf_protect_method = method_decorator(csrf_protect)
from django.utils import timezone
import json
from django.views.decorators.http import require_http_methods
from .serializers import *
from rest_framework.generics import UpdateAPIView

# imports for checkout

from django.contrib.auth.decorators import login_required
from .models import Cart, Order, OrderItem, Product
from .mpesa_utils import lipa_na_mpesa_online
from rest_framework import generics
from rest_framework.permissions import AllowAny
import random


# This is for typical django frontend html

from rest_framework import status
import logging

logger = logging.getLogger(__name__)


def index(request):
    get_token(request)
    return render(request, 'index.html')


def home(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')


@api_view(['GET'])
# class Blogs(APIView):
# permission_classes = (AllowAny,)
# authentication_classes = ()
# @csrf_protect_method
@csrf_exempt
def blogs(request):
    if request.user.is_authenticated:
        # renderer_classes = [JSONRenderer]
        return render(request, 'blogs/BlogForm.jsx')


@login_required
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
@csrf_exempt
def blog_list(request):
    if request.method == 'GET':
        blogs = Blog.objects.all()
        return render(request, 'blog_list.html', {'blogs': blogs})
    else:
        return HttpResponseNotAllowed(['GET'])


@csrf_exempt
def blog_detail(request, slug):
    blog = get_object_or_404(Blog, slug=slug)
    return render(request, 'blog_detail.html', {'blog': blog})


@api_view(['GET', 'POST'])
@csrf_exempt
@permission_classes([AllowAny])
def blog_create(request):
    if request.method == 'POST':
        form = BlogForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('blogs/BlogForm.jsx')
    else:
        form = BlogForm()
    return render(request, 'blogs/BlogForm.jsx', {'form': form})


@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def blog_create(request):
    serializer = BlogSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@csrf_exempt
def blog_update(request, slug):
    blog = get_object_or_404(Blog, slug=slug)
    if request.method == 'POST':
        form = BlogForm(request.POST, request.FILES, instance=blog)
        if form.is_valid():
            form.save()
            return redirect('blog_detail', slug=blog.slug)
    else:
        form = BlogForm(instance=blog)
    return render(request, 'blogs/BlogForm.jsx', {'form': form})


def blog_delete(request, slug):
    blog = get_object_or_404(Blog, slug=slug)
    if request.method == 'POST':
        blog.delete()
        return redirect('blog_list')
    return render(request, 'blog_confirm_delete.html', {'blog': blog})

# Implemented views for CRUD operations and like/share actions


class BlogListView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

    def list(self, request, *args, **kwargs):
        logger.info(f"Request method: {request.method}")
        logger.info(f"Request data: {request.data}")
        return super().list(request, *args, **kwargs)


class BlogListCreateView(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = [AllowAny]  # This allows unauthenticated access

    def perform_create(self, serializer):
        serializer.save()

    def get_queryset(self):
        queryset = super().get_queryset()
        search_query = self.request.query_params.get('search', None)
        if search_query:
            queryset = queryset.filter(
                Q(title__icontains=search_query) |
                Q(content__icontains=search_query)
            )
        return queryset


"""
    def blog_create(request):
        if request.method == 'POST':
            form = BlogForm(request.POST, request.FILES)
            if form.is_valid():
                form.save()
                return redirect('blogs/BlogForm.jsx')
        else:
            form = BlogForm()
        return render(request, 'blogs/BlogForm.jsx', {'form': form})
"""


@api_view(['POST', 'GET'])
@permission_classes([AllowAny])
def Register(request):
    # Use the serializer to validate the input data
    serializer = UserRegisterSerializer(data=request.data)

    if serializer.is_valid():
        # Extract validated data
        username = serializer.validated_data.get('username')
        email = serializer.validated_data.get('email')

        # Check if username or email already exists
        if User.objects.filter(username=username).exists():
            return Response({"error": "This username already exists."}, status=status.HTTP_400_BAD_REQUEST)
        if User.objects.filter(email=email).exists():
            return Response({"error": "An account with this email already exists."}, status=status.HTTP_400_BAD_REQUEST)

        # Save the user and profile (profile handled in serializer)
        user = serializer.save()

        # Generate refresh and access tokens for the new user
        refresh = RefreshToken.for_user(user)

        # Create a welcome notification
        notification_message = f'Hi there {user.email}, welcome aboard! You have successfully created your account.'
        Notification.objects.create(user=user, message=notification_message)

        # Return a successful response with the tokens
        return Response({
            "message": "Signup successful!",
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }, status=status.HTTP_201_CREATED)

    # Return validation errors if any
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
            messages.error(
                self.request, 'No user is associated with this email address.')
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
    permission_classes = (AllowAny,)
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    lookup_field = 'slug'

    def retrieve(self, request, slug=None):
        queryset = self.get_queryset()
        blog = get_object_or_404(queryset, slug=slug)
        serializer = BlogSerializer(blog)
        return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def search_blog(request):
    query = request.query_params.get('q', '')
    if query:
        blogs = Blog.objects.filter(
            Q(title__icontains=query) | Q(content__icontains=query))
    else:
        blogs = Blog.objects.all()

    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)

# Polls


class PollListCreateView(generics.ListCreateAPIView):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer
    permission_classes = (AllowAny,)

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class PollDetailView(generics.RetrieveAPIView):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer


@permission_classes([AllowAny])
class PollListView(APIView):
    def get(self, request):
        polls = Poll.objects.all()
        serializer = PollSerializer(polls, many=True)
        return Response(serializer.data)


@permission_classes([AllowAny])
class PollVoteView(APIView):
    def put(self, request, pk):
        poll = Poll.objects.get(pk=pk)
        choice = request.data.get('choice')
        # Example of getting the logged-in user
        user = User.objects.get(id=request.user.id)

        # Create or update the vote for the poll
        vote, created = Vote.objects.update_or_create(
            poll=poll, user=user,
            defaults={'choice': choice}
        )

        return Response({'status': 'vote updated'}, status=status.HTTP_200_OK)


@permission_classes([AllowAny])
@api_view(['POST'])
def SubmitVote(request):
    serializer = VoteSerializer(data=request.data)
    if serializer.is_valid():
        vote = serializer.save()
        poll = vote.poll
        return Response({
            'message': 'Vote submitted successfully',
            'poll': poll.vote_counts()  # Return updated vote counts
        })
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@require_http_methods(["PUT"])
def vote_poll(request, poll_id):
    poll = get_object_or_404(Poll, pk=poll_id)

    try:
        data = json.loads(request.body)
        choice = data.get('choice')

        if choice not in ['YES', 'NO', 'MAYBE', 'OTHER']:
            return JsonResponse({'error': 'Invalid choice'}, status=400)

        Vote.objects.create(poll=poll, user=request.user, choice=choice)
        return JsonResponse({'message': 'Vote recorded successfully'})

    except KeyError:
        return JsonResponse({'error': 'Bad Request'}, status=400)

# Verification photo and Id views
# install bot03
# to configure aws cli for face recogniotn.


class VerifyIDView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            verification = request.user.id_verification
            if verification.verify_user():
                notification_message = f'Hi {request.user.email}, you have successfully verified your ID'
                Notification.objects.create(
                    user=request.user, message=notification_message)

                return Response({"message": "User successfully verified."}, status=status.HTTP_200_OK)
            else:
                return Response({"message": "Verification failed. ID or photo did not match."}, status=status.HTTP_400_BAD_REQUEST)
        except IDVerification.DoesNotExist:
            return Response({"error": "ID verification record not found."}, status=status.HTTP_404_NOT_FOUND)


class IDVerificationUpdateView(generics.UpdateAPIView):
    queryset = IDVerification.objects.all()
    serializer_class = IDVerificationSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user.id_verification

    def put(self, request, *args, **kwargs):
        verification_instance = self.get_object()
        serializer = self.get_serializer(
            verification_instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"message": "User successfully verified."}, status=status.HTTP_200_OK)


class IDVerificationDetailView(generics.RetrieveAPIView):
    queryset = IDVerification.objects.all()
    serializer_class = IDVerificationSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user.id_verification


# PRODUCT ENDPOINTS


class CreateProduct(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # Check if the user is a farmer
        try:
            farmer = Farmer.objects.get(user=request.user)
        except Farmer.DoesNotExist:
            return Response(
                {"detail": "You must be registered as a farmer to create a product."},
                status=status.HTTP_403_FORBIDDEN
            )

        # Parse and validate the request data
        data = request.data.copy()  # Copy to avoid directly modifying the original
        data['farmer'] = farmer.id  # Auto-assign the farmer field

        serializer = ProductSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RetrieveProduct(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        product = get_object_or_404(Product, id=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)


class UpdateProduct(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        product = get_object_or_404(Product, id=pk)
        serializer = ProductSerializer(
            product, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DeleteProduct(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, pk):
        product = get_object_or_404(Product, id=pk)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@permission_classes([AllowAny])
class ProductListView(APIView):
    def get(self, request, *args, **kwargs):
        # Filter products based on the search query parameter
        search_query = request.query_params.get('name')
        if search_query is not None:
            filtered_products = Product.objects.filter(
                name__icontains=search_query)
        else:
            filtered_products = Product.objects.all()

        paginator = PageNumberPagination()
        paginator.page_size = 10  # Set the number of items per page
        result_page = paginator.paginate_queryset(filtered_products, request)

        serializer = ProductSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)

# code for checkout
# views.py


@login_required(login_url='loginpage')
def checkout(request):
    # Fetch all cart items of the authenticated user
    raw_cart = Cart.objects.filter(user=request.user)

    # Validate the cart (e.g., check product quantity)
    for item in raw_cart:
        if item.product_qty > item.product.quantity:
            Cart.objects.filter(id=item.id).delete()
            messages.warning(
                request, f"Some products were removed due to insufficient stock.")

    # Calculate total price
    cart_items = Cart.objects.filter(user=request.user)
    total_price = 0
    for item in cart_items:
        total_price += item.product.selling_price * item.product_qty

    context = {
        'cart_items': cart_items,
        'total_price': total_price,
    }

    return render(request, 'store/checkout.html', context)


@login_required(login_url='loginpage')
def place_order(request):
    if request.method == 'POST':
        # Create a new order for the user
        new_order = Order(
            user=request.user,
            fname=request.POST.get('fname'),
            lname=request.POST.get('lname'),
            email=request.POST.get('email'),
            phone=request.POST.get('phone'),
            address=request.POST.get('address'),
            city=request.POST.get('city'),
            state=request.POST.get('state'),
            country=request.POST.get('country'),
            pincode=request.POST.get('pincode'),
            payment_mode=request.POST.get('payment_mode'),
        )

        # Generate a tracking number for the order
        track_no = 'freshly' + str(random.randint(1111111, 9999999))
        while Order.objects.filter(tracking_no=track_no).exists():
            track_no = 'freshly' + str(random.randint(1111111, 9999999))

        new_order.tracking_no = track_no
        new_order.total_price = calculate_cart_total(request)
        new_order.save()

        # Add all items from the user's cart to the order
        cart_items = Cart.objects.filter(user=request.user)
        for item in cart_items:
            OrderItem.objects.create(
                order=new_order,
                product=item.product,
                price=item.product.selling_price,
                quantity=item.product_qty
            )

            # Update product stock quantity
            product = Product.objects.get(id=item.product.id)
            product.quantity -= item.product_qty
            product.save()

        # Clear the user's cart after order placement
        Cart.objects.filter(user=request.user).delete()
        messages.success(request, "Your order has been placed successfully!")

        return redirect('home')
    else:
        return redirect('checkout')


def calculate_cart_total(request):
    """Helper function to calculate total cart price"""
    cart = Cart.objects.filter(user=request.user)
    total_price = 0
    for item in cart:
        total_price += item.product.selling_price * item.product_qty
    return total_price


@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    # Authenticate the user
    user = authenticate(request, username=email, password=password)

    if user is not None:
        # If authentication is successful, generate a token
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'user_id': user.id,
            'email': user.email,
        }, status=status.HTTP_200_OK)
    else:
        # If authentication fails
        return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


# View all orders for a user
@api_view(['GET'])
def my_orders(request):
    try:
        user_orders = Order.objects.filter(user=request.user)
        serializer = OrderSerializer(user_orders, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        print(f"Error fetching orders: {str(e)}")
        return Response({"error": "Failed to fetch orders"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# Cancel an order (allowed only if the status is 'out for shipping')
@api_view(['POST'])
def cancel_order(request, tracking_no):
    try:
        order = Order.objects.get(tracking_no=tracking_no, user=request.user)
        if order.status == 'out_for_shipping':
            order.status = 'cancelled'
            order.save()
            notification_message = f'Hi {request.user.email}, your order of ID : {order.id} has been cancelled'
            Notification.objects.create(
                user=request.user, message=notification_message)

            return Response({"message": "Order has been cancelled"}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Cannot cancel order unless it is 'out for shipping'"}, status=status.HTTP_400_BAD_REQUEST)
    except Order.DoesNotExist:
        return Response({"error": "Order not found"}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        print(f"Error cancelling order: {str(e)}")
        return Response({"error": "Failed to cancel order"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# View specific order details by tracking number
@api_view(['GET'])
def view_order(request, tracking_no):
    try:
        order = Order.objects.filter(
            tracking_no=tracking_no, user=request.user).first()
        if order:
            order_items = OrderItem.objects.filter(order=order)
            order_serializer = OrderSerializer(order)
            items_serializer = OrderItemSerializer(order_items, many=True)
            return Response({
                "order": order_serializer.data,
                "items": items_serializer.data
            }, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Order not found"}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        print(f"Error viewing order: {str(e)}")
        return Response({"error": "Failed to fetch order details"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# # Banner for Marketplace Page
@permission_classes([AllowAny])
class BannerListView(generics.ListAPIView):
    queryset = Banner.objects.filter(active=True).order_by('-created_at')
    serializer_class = BannerSerializer


# Category Views

@permission_classes([AllowAny])
class CategoryListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


@permission_classes([AllowAny])
class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


# Cart Endpoints
@api_view(['GET'])
def get_cart_instance(request):
    # Check if user is authenticated
    if request.user.is_authenticated:
        cart, created = Cart.objects.get_or_create(user=request.user)
    else:
        # Use session for non-authenticated users
        session_id = request.session.session_key
        if not session_id:
            request.session.create()
            session_id = request.session.session_key
        cart, created = Cart.objects.get_or_create(session_id=session_id)

    # Serialize the cart data
    cart_data = CartSerializer(cart).data

    # Return the cart along with its items in the response
    return Response(cart_data, status=status.HTTP_200_OK)


def get_cart_instance2(request):
    # Assuming the user is logged in, get or create the user's cart.
    user = request.user
    cart, created = Cart.objects.get_or_create(user=user)
    return cart


@api_view(['POST'])
def add_to_cart(request):
    cart = get_cart_instance2(request)
    product_id = request.data.get("product_id")
    quantity = request.data.get("quantity", 1)

    if not product_id:
        return Response({"error": "Product ID is required"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist:
        return Response({"error": "Invalid product ID"}, status=status.HTTP_404_NOT_FOUND)

    # Check if the product already exists in the cart
    if CartItem.objects.filter(cart=cart, product_id=product_id).exists():
        return Response({"error": "This item already exists in the cart. Use the update quantity option instead."}, status=status.HTTP_400_BAD_REQUEST)

    cart_item_data = {
        'cart': cart.id,
        'product': product.id,
        'quantity': quantity
    }

    serializer = CartItemSerializer(
        data=cart_item_data, context={'cart_id': cart.id})
    if serializer.is_valid():
        cart_item, created = CartItem.objects.get_or_create(
            cart=cart, product=product)
        cart_item.quantity += int(quantity)
        cart_item.save()
        return Response(CartSerializer(cart).data, status=status.HTTP_200_OK)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def update_quantity(request):
    # Ensure this returns the cart object, not serialized data
    cart = get_cart_instance2(request)
    product_id = request.data.get("product_id")
    new_quantity = request.data.get("quantity")

    if not product_id:
        return Response({"error": "Product ID is required"}, status=status.HTTP_400_BAD_REQUEST)

    if new_quantity is None or int(new_quantity) <= 0:
        return Response({"error": "A valid quantity is required"}, status=status.HTTP_400_BAD_REQUEST)

    # Check if the product exists in the cart
    try:
        cart_item = CartItem.objects.get(cart=cart, product_id=product_id)
    except CartItem.DoesNotExist:
        return Response({"error": "Product not found in cart"}, status=status.HTTP_404_NOT_FOUND)

    cart_item_data = {
        'cart': cart.id,
        'product': product_id,
        'quantity': new_quantity
    }

    serializer = CartItemSerializer(cart_item, data=cart_item_data)
    if serializer.is_valid():
        serializer.save()
        return Response(CartSerializer(cart).data, status=status.HTTP_200_OK)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def remove_from_cart(request):
    # Ensure this returns the cart object, not serialized data
    cart = get_cart_instance2(request)
    product_id = request.data.get("product_id")
    quantity = request.data.get("quantity")

    if not product_id:
        return Response({"error": "Product ID is required"}, status=status.HTTP_400_BAD_REQUEST)
    try:
        cart_item = CartItem.objects.get(cart=cart, product_id=product_id)
    except CartItem.DoesNotExist:
        return Response({"error": "Product not found in cart"}, status=status.HTTP_404_NOT_FOUND)

    if quantity is None:
        quantity = cart_item.quantity

    if quantity < 1:
        return Response({"error": "Quantity must be at least 1"}, status=status.HTTP_400_BAD_REQUEST)

    if quantity >= cart_item.quantity:
        # Remove item from cart if quantity to remove is greater than or equal to the existing quantity
        cart_item.delete()
        return Response({"success": "Item removed from cart"}, status=status.HTTP_200_OK)
    else:
        # Adjust the quantity of the cart item
        cart_item.quantity -= int(quantity)
        cart_item.save()
        return Response({"success": "Item quantity updated in cart"}, status=status.HTTP_200_OK)


class NotificationListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        # Get all unread notifications ordered by timestamp
        notifications = Notification.objects.filter(
            user=request.user.id, read=False).order_by('-timestamp')

        # Paginate the results
        paginator = PageNumberPagination()
        paginator.page_size = 3
        result_page = paginator.paginate_queryset(notifications, request)

        # Serialize the notifications
        serializer = NotificationSerializer(result_page, many=True)

        # Return the paginated response first
        response = paginator.get_paginated_response(serializer.data)

        # Mark all unread notifications as read after the response is prepared
        notifications.update(read=True)

        return response


# List and Create Orders (No authentication required for creating orders)


class OrderListCreateView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [AllowAny]  # Allow anyone to create an order

# Retrieve, Update, and Delete Order (Still requires authentication)


class OrderDetailView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'order_id'
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    # You can keep the default permission classes here (IsAuthenticated by default)


class FAQListView(APIView):
    # This line allows unrestricted access to this view
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        faqs = FAQ.objects.all()
        serializer = FAQSerializer(faqs, many=True)
        return Response(serializer.data)


# views.py


class FAQMainPageListView(generics.ListAPIView):
    queryset = FAQMainPage.objects.all()
    serializer_class = FAQMainPageSerializer
    permission_classes = [AllowAny]
# Payment views


@csrf_exempt
def initiate_payment(request):
    if request.method == 'POST':
        phone_number = request.POST.get('phone_number')
        amount = request.POST.get('amount')
        user = request.user

        # Initiate the M-Pesa payment
        response = lipa_na_mpesa_online(user, phone_number, amount)

        return JsonResponse({
            "status": response.status,
            "message": "Payment initiated" if response.status == 'completed' else "Payment failed",
            "error": response.error_message if response.status == 'failed' else None
        })


@csrf_exempt
def mpesa_callback(request):
    mpesa_response = json.loads(request.body.decode('utf-8'))
    # Handle the response here (e.g., save the transaction to your database)

    return JsonResponse({"ResultCode": 0, "ResultDesc": "Accepted"})


# Fetch user profile

# @permission_classes([IsAuthenticated])
# class GetUserProfile(APIView):

#     def get(self, request):
#         user = request.user
#         serializer = UserProfileSerializer(user, many=False)
#         return Response(serializer.data)


class GetUserProfile(APIView):
    def get(self, request):
        user = request.user
        serializer = UserProfileSerializer(user, many=False)

        # Check if the user has an associated Farmer instance
        # Check if the 'farmer' attribute exists
        is_farmer = hasattr(user, 'farmer')

        # Include 'is_farmer' in the response data
        profile_data = serializer.data
        profile_data['is_farmer'] = is_farmer
        print("fetched profile data", profile_data)
        return Response(profile_data)


@permission_classes([IsAuthenticated])
class UpdateUserProfile(APIView):

    def put(self, request):
        user = request.user
        serializer = UserProfileSerializer(
            user, data=request.data, partial=True)  # Allow partial updates

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class FarmerListView(APIView):
    def get(self, request, *args, **kwargs):
        # Filter farmers based on verification status
        verified_farmers = Farmer.objects.filter(
            user__id_verification__is_verified=True)

        paginator = PageNumberPagination()
        paginator.page_size = 10  # Set the number of items per page
        result_page = paginator.paginate_queryset(verified_farmers, request)
        serializer = FarmerSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)


<<<<<<< HEAD
# consaltations
=======
>>>>>>> 188ef061ad30c24d8fbba9e2bbea3da4f00e3f7f


@api_view(['GET'])
@permission_classes([AllowAny])
def consultant_list(request):
    consultants = Consultant.objects.all()
    serializer = ConsultantSerializer(consultants, many=True)
    return Response(serializer.data)
<<<<<<< HEAD
=======


@permission_classes([AllowAny])
class GetFarmingSystems(APIView):

    def get(self, request):
        farmingsystems = FarmingSystems.objects.all()  # Retrieve all farming systems
        serializer = FarmingSystemSerializer(
            farmingsystems, many=True)  # Serialize the data
        return Response(serializer.data, status=status.HTTP_200_OK)


@permission_classes([IsAuthenticated])
class WriteFarmingSystems(APIView):
    def post(self, request):  # one can input the farming systems
        serializer = FarmingSystemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UploadFarmingSystemImage(APIView):
    def post(self,request,farmingsystem_id):

        try:
            farmingsystem = FarmingSystems.objects.get(id=farmingsystem_id)
        except FarmingSystems.DoesNotExist:
            return Response({'error': 'Farming system not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer=FarmingSystemImages(data=request.data)

        if serializer.is_valid():
            serializer.save(farmingsystem=farmingsystem)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class TeamMembers(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        teammembers = TeamMember.objects.all()  # get all the team members
        serializer = TeamMembersSerializer(teammembers, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class AddingNewTeamMembers(APIView):
    permission_classes = [IsAuthenticated]
    # adding new members

    def post(self, request):
        serializer = TeamMembersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        orders = Order.objects.filter(
            customer_email=request.user.email).order_by('-created_at')

        paginator = PageNumberPagination()
        paginator.page_size = 10
        result_page = paginator.paginate_queryset(orders, request)

        serializer = OrderSerializer(result_page, many=True)
        response = paginator.get_paginated_response(serializer.data)

        return response


class QuotationListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        # Use Q objects to filter quotations where the user is either the buyer or the seller
        quotations = Quotation.objects.filter(
            Q(buyer=request.user) | Q(seller=request.user)
        ).order_by('-created_at')

        # Paginate the results
        paginator = PageNumberPagination()
        paginator.page_size = 3  # Set your desired page size here
        result_page = paginator.paginate_queryset(quotations, request)

        # Serialize the quotations
        serializer = QuotationSerializer(result_page, many=True)

        # Return the paginated response
        return paginator.get_paginated_response(serializer.data)

class RegisterFarmerView(APIView):
    def post(self, request):
        user = request.user

        # Check if the user is already registered as a Farmer
        if Farmer.objects.filter(user=user).exists():
            return Response(
                {"detail": "User is already registered as a farmer."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Extract data from request
        data = request.data

        # Validate farming_system choice
        valid_farming_systems = [choice[0] for choice in Farmer.FARMING_SYSTEM_CHOICES]
        if 'farming_system' in data and data['farming_system'] not in valid_farming_systems:
            return Response(
                {
                    "farming_system": f"Invalid choice. Valid options are: {', '.join(valid_farming_systems)}"
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        # Validate garden_setup choice
        valid_garden_setups = [choice[0] for choice in Farmer.GARDEN_SETUP_CHOICES]
        if 'garden_setup' in data and data['garden_setup'] not in valid_garden_setups:
            return Response(
                {
                    "garden_setup": f"Invalid choice. Valid options are: {', '.join(valid_garden_setups)}"
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        # Create a Farmer object with the provided data
        farmer = Farmer.objects.create(
            user=user,
            farm_size=data.get('farm_size'),
            main_crop=data.get('main_crop'),
            farming_system=data.get('farming_system'),
            garden_setup=data.get('garden_setup'),
            address=data.get('address')
        )

        # Serialize and return the farmer data
        serializer = FarmerSerializer(farmer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)



class UnregisterFarmerView(APIView):
    def delete(self, request):
        user = request.user

        # Check if the user has a Farmer object
        try:
            farmer = Farmer.objects.get(user=user)
            farmer.delete()
            return Response(
                {"detail": "Farmer unregistered successfully."},
                status=status.HTTP_204_NO_CONTENT
            )
        except Farmer.DoesNotExist:
            return Response(
                {"detail": "User is not registered as a farmer."},
                status=status.HTTP_400_BAD_REQUEST
            )



class UpdateFarmerView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request):
        user = request.user

        # Check if the user is a farmer
        try:
            farmer = Farmer.objects.get(user=user)
        except Farmer.DoesNotExist:
            return Response(
                {"detail": "User is not registered as a Farmer."},
                status=status.HTTP_400_BAD_REQUEST
            )

        data = request.data

        # Validate farming_system choice if provided
        valid_farming_systems = [choice[0] for choice in Farmer.FARMING_SYSTEM_CHOICES]
        if 'farming_system' in data:
            if data['farming_system'] not in valid_farming_systems:
                return Response(
                    {
                        "farming_system": f"Invalid choice. Valid options are: {', '.join(valid_farming_systems)}"
                    },
                    status=status.HTTP_400_BAD_REQUEST
                )
            farmer.farming_system = data['farming_system']

        # Validate garden_setup choice if provided
        valid_garden_setups = [choice[0] for choice in Farmer.GARDEN_SETUP_CHOICES]
        if 'garden_setup' in data:
            if data['garden_setup'] not in valid_garden_setups:
                return Response(
                    {
                        "garden_setup": f"Invalid choice. Valid options are: {', '.join(valid_garden_setups)}"
                    },
                    status=status.HTTP_400_BAD_REQUEST
                )
            farmer.garden_setup = data['garden_setup']

        # Update farm_size if provided
        if 'farm_size' in data:
            try:
                farmer.farm_size = float(data['farm_size'])
            except ValueError:
                return Response(
                    {"farm_size": "Invalid value for farm_size. Must be a numeric value."},
                    status=status.HTTP_400_BAD_REQUEST
                )

        # Update main_crop if provided
        if 'main_crop' in data:
            farmer.main_crop = data['main_crop']

        # Update address if provided
        if 'address' in data:
            farmer.address = data['address']

        # Save the updated farmer details
        farmer.save()

        serializer = FarmerSerializer(farmer)
        return Response(serializer.data, status=status.HTTP_200_OK)


class FarmerProfileView(APIView):
    def get(self, request):
        user = request.user

        # Check if the user is a registered Farmer
        try:
            farmer = Farmer.objects.get(user=user)
        except Farmer.DoesNotExist:
            return Response(
                {"detail": "You are not registered as a farmer."},
                status=status.HTTP_404_NOT_FOUND
            )

        # Serialize and return the farmer data
        serializer = FarmerSerializer(farmer)
        return Response(serializer.data, status=status.HTTP_200_OK)



class FarmerSalesHistoryView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        # Ensure the user is a farmer
        if not hasattr(request.user, 'farmer'):
            return Response(
                {"detail": "You must be a farmer to access this view."},
                status=status.HTTP_403_FORBIDDEN
            )

        # Get order items where the requesting user is the farmer of the product
        farmer = request.user.farmer
        order_items = OrderItem.objects.filter(
            product_id__farmer=farmer
        ).order_by('-order__created_at')  # Order by the associated order's creation time

        # Paginate the results
        paginator = PageNumberPagination()
        paginator.page_size = 10
        paginated_items = paginator.paginate_queryset(order_items, request)

        # Serialize and modify the response structure
        serialized_data = [
            {
                "produce": item.product_name,
                "bags_sold": item.product_quantity,
                "amount": item.product_price,
                "date": item.order.created_at.strftime("%Y-%m-%d"),
            }
            for item in paginated_items
        ]

        return paginator.get_paginated_response(serialized_data)






class FarmerFarmProduceView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        # Ensure the user is a farmer
        if not hasattr(request.user, 'farmer'):
            return Response(
                {"detail": "You must be a farmer to access this view."},
                status=status.HTTP_403_FORBIDDEN
            )

        # Get products owned by the farmer
        farmer = request.user.farmer
        products = Product.objects.filter(farmer=farmer).order_by('-created_at')

        # Paginate the results
        paginator = PageNumberPagination()
        paginator.page_size = 10
        paginated_products = paginator.paginate_queryset(products, request)

        # Serialize and format the data
        serialized_data = [
            {
                "crop": product.name,
                "used_to_grow": product.used_for,
                "bags_harvested": product.original_qtty,
                "bags_sold": product.original_qtty - product.qtty,
            }
            for product in paginated_products
        ]

        return paginator.get_paginated_response(serialized_data)



class CreatePaymentMethodView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        payment_type = request.data.get(
            "payment_type")  # 'credit_card' or 'mpesa'

        # Get or create the PaymentMethod object for the user
        payment_method, created = PaymentMethod.objects.get_or_create(
            user=user)

        # Process based on the payment type
        if payment_type == "credit_card":
            serializer = CreditCardDetailsSerializer(data=request.data)
            if serializer.is_valid():
                # Save CreditCardDetails with the created PaymentMethod
                credit_card = serializer.save(payment_method=payment_method)
                return Response(
                    {
                        "status": "success",
                        "message": "Credit card payment method created successfully.",
                        "data": PaymentMethodSerializer(payment_method).data
                    },
                    status=status.HTTP_201_CREATED
                )
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        elif payment_type == "mpesa":
            serializer = MpesaDetailsSerializer(data=request.data)
            if serializer.is_valid():
                # Save MpesaDetails with the created PaymentMethod
                mpesa_details = serializer.save(payment_method=payment_method)
                return Response(
                    {
                        "status": "success",
                        "message": "M-Pesa payment method created successfully.",
                        "data": PaymentMethodSerializer(payment_method).data
                    },
                    status=status.HTTP_201_CREATED
                )
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        else:
            return Response(
                {
                    "status": "error",
                    "message": "Invalid payment method type."
                },
                status=status.HTTP_400_BAD_REQUEST
            )


class UpdatePaymentMethodView(UpdateAPIView):
    """
    API View to update a user's payment method.
    """
    permission_classes = [IsAuthenticated]
    serializer_class = PaymentMethodSerializer

    def get_queryset(self):
        # Only allow users to access their own payment methods
        return PaymentMethod.objects.filter(user=self.request.user)

    def get_object(self):
        # Get the user's payment method
        return self.get_queryset().first()

    def update(self, request, *args, **kwargs):
        # Get the payment method to update
        partial = kwargs.pop('partial', False)
        instance = self.get_object()

        if not instance:
            return Response(
                {
                    "status": "error",
                    "message": "No payment method found for this user."
                },
                status=status.HTTP_404_NOT_FOUND
            )

        payment_type = request.data.get(
            "payment_type")  # 'credit_card' or 'mpesa'

        if payment_type == "credit_card":
            if not hasattr(instance, 'credit_card_details'):
                return Response(
                    {
                        "status": "error",
                        "message": "No credit card details found for this payment method."
                    },
                    status=status.HTTP_404_NOT_FOUND
                )
            serializer = CreditCardDetailsSerializer(
                instance.credit_card_details, data=request.data, partial=partial)
            if serializer.is_valid():
                serializer.save()
                return Response(
                    {
                        "status": "success",
                        "message": "Credit card payment method updated successfully.",
                        "data": PaymentMethodSerializer(instance).data
                    },
                    status=status.HTTP_200_OK
                )
            return Response(
                {
                    "status": "error",
                    "message": "Invalid data",
                    "errors": serializer.errors
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        elif payment_type == "mpesa":
            if not hasattr(instance, 'mpesa_details'):
                return Response(
                    {
                        "status": "error",
                        "message": "No M-Pesa details found for this payment method."
                    },
                    status=status.HTTP_404_NOT_FOUND
                )
            serializer = MpesaDetailsSerializer(
                instance.mpesa_details, data=request.data, partial=partial)
            if serializer.is_valid():
                serializer.save()
                return Response(
                    {
                        "status": "success",
                        "message": "M-Pesa payment method updated successfully.",
                        "data": PaymentMethodSerializer(instance).data
                    },
                    status=status.HTTP_200_OK
                )
            return Response(
                {
                    "status": "error",
                    "message": "Invalid data",
                    "errors": serializer.errors
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        else:
            return Response(
                {
                    "status": "error",
                    "message": "Invalid payment method type."
                },
                status=status.HTTP_400_BAD_REQUEST
            )


class UserPaymentMethodsView(APIView):
    """
    API View to retrieve all payment methods for the authenticated user.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        payment_methods = PaymentMethod.objects.filter(user=user)
        serializer = PaymentMethodSerializer(payment_methods, many=True)

        return Response(
            {
                "status": "success",
                "message": "User payment methods retrieved successfully",
                "data": serializer.data
            },
            status=status.HTTP_200_OK
        )


class DeletePaymentMethodView(APIView):
    """
    API View to delete a user's payment method details (M-Pesa or Credit Card).
    """
    permission_classes = [IsAuthenticated]

    def delete(self, request):
        user = request.user
        payment_type = request.data.get(
            "payment_type")  # 'credit_card' or 'mpesa'

        if not payment_type:
            return Response(
                {
                    "status": "error",
                    "message": "Payment type is required."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            payment_method = PaymentMethod.objects.get(user=user)
        except PaymentMethod.DoesNotExist:
            return Response(
                {
                    "status": "error",
                    "message": "Payment method not found for this user."
                },
                status=status.HTTP_404_NOT_FOUND
            )

        if payment_type == "credit_card":
            if hasattr(payment_method, 'credit_card_details'):
                payment_method.credit_card_details.delete()
                return Response(
                    {
                        "status": "success",
                        "message": "Credit card payment method details deleted successfully."
                    },
                    status=status.HTTP_204_NO_CONTENT
                )
            else:
                return Response(
                    {
                        "status": "error",
                        "message": "No credit card details found for this payment method."
                    },
                    status=status.HTTP_404_NOT_FOUND
                )

        elif payment_type == "mpesa":
            if hasattr(payment_method, 'mpesa_details'):
                payment_method.mpesa_details.delete()
                return Response(
                    {
                        "status": "success",
                        "message": "M-Pesa payment method details deleted successfully."
                    },
                    status=status.HTTP_204_NO_CONTENT
                )
            else:
                return Response(
                    {
                        "status": "error",
                        "message": "No M-Pesa details found for this payment method."
                    },
                    status=status.HTTP_404_NOT_FOUND
                )

        else:
            return Response(
                {
                    "status": "error",
                    "message": "Invalid payment method type."
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        













class RegisterTransporterView(APIView):
    def post(self, request):
        user = request.user

        if Transporter.objects.filter(user=user).exists():
            return Response(
                {"detail": "User is already registered as a Transporter."},
                status=status.HTTP_400_BAD_REQUEST
            )
        data = request.data
        valid_transport_choices = [choice[0] for choice in Transporter.TRANSPORT_CHOICES]
        if 'vehicle' in data and data['vehicle'] not in valid_transport_choices:
            return Response(
                {
                    "vehicle": f"Invalid choice. Valid options are: {', '.join(valid_transport_choices)}"
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        transporter = Transporter.objects.create(
            user=user,
            id_back=data.get('id_back'),
            experience=data.get('experience'),
            id_front=data.get('id_front'),
            vehicle=data.get('vehicle'),
            address=data.get('address')
            
            )
        serializer = TransporterSerializer(transporter)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class UpdateTransporterView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request):
        user = request.user

        # Check if the user is a transporter
        try:
            transporter = Transporter.objects.get(user=user)
        except Transporter.DoesNotExist:
            return Response(
                {"detail": "User is not registered as a Transporter."},
                status=status.HTTP_400_BAD_REQUEST
            )

        data = request.data
        valid_transport_choices = [choice[0] for choice in Transporter.TRANSPORT_CHOICES]

        # Validate vehicle choice if provided
        if 'vehicle' in data:
            if data['vehicle'] not in valid_transport_choices:
                return Response(
                    {
                        "vehicle": f"Invalid choice. Valid options are: {', '.join(valid_transport_choices)}"
                    },
                    status=status.HTTP_400_BAD_REQUEST
                )
            transporter.vehicle = data['vehicle']

        # Update address if provided
        if 'address' in data:
            transporter.address = data['address']

        # Save updated transporter information
        transporter.save()

        serializer = TransporterSerializer(transporter)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UnregisterTransporterView(APIView):
    def delete(self, request):
        user = request.user

        # Check if the user has a Transporter object
        try:
            transporter = Transporter.objects.get(user=user)
            transporter.delete()
            return Response(
                {"detail": "Transporter unregistered successfully."},
                status=status.HTTP_204_NO_CONTENT
            )
        except Transporter.DoesNotExist:
            return Response(
                {"detail": "User is not registered as a Transporter."},
                status=status.HTTP_400_BAD_REQUEST
            )






class PreviousDeliveriesView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        # Filter orders based on transporter and status
        previous_deliveries = Order.objects.filter(
            transporter__user=request.user,
            status="Ready"
        )

        paginator = PageNumberPagination()
        paginator.page_size = 10  # Set the number of items per page
        result_page = paginator.paginate_queryset(previous_deliveries, request)
        serializer = ShippingSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)


class UpcomingDeliveriesView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        # Filter orders based on transporter and status
        upcoming_deliveries = Order.objects.filter(
            transporter__user=request.user,
            status="Transporting"
        )

        paginator = PageNumberPagination()
        paginator.page_size = 10  # Set the number of items per page
        result_page = paginator.paginate_queryset(upcoming_deliveries, request)
        serializer = ShippingSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)







from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.utils import timezone
from .models import Order, Transporter,GardenSystemImages,GardenSystems
from .serializers import TransporterSerializer,GardenSystemImageSerializer,GardenSystemSerializer
from rest_framework.permissions import IsAuthenticated

class MarkAsDeliveredView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, order_id, *args, **kwargs):
        try:
            # Retrieve the order and check if the user is the assigned transporter
            order = Order.objects.get(order_id=order_id, transporter__user=request.user)

            # Update order status and set delivered_at timestamp
            order.status = "Ready"
            order.delivered_at = timezone.now()
            order.save()

            # Increment the total deliveries for the transporter
            transporter = Transporter.objects.get(user=request.user)
            transporter.total_deliveries += 1
            transporter.save()

            return Response({"message": "Order marked as delivered successfully."}, status=status.HTTP_200_OK)

        except Order.DoesNotExist:
            return Response(
                {"error": "Order not found or you are not the assigned transporter."},
                status=status.HTTP_400_BAD_REQUEST
            )


class TransporterDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        try:
            # Retrieve the transporter information for the authenticated user
            transporter = Transporter.objects.get(user=request.user)
            serializer = TransporterSerializer(transporter)
            transporter_data = {
                "transporter_name": serializer.data.get("transporter_name"),
                "total_deliveries": serializer.data.get("total_deliveries"),
                "total_earnings": serializer.data.get("total_earnings"),
                "average_rating": serializer.data.get("average_rating"),
                "vehicle": serializer.data.get("vehicle"),

            }
            return Response(transporter_data, status=status.HTTP_200_OK)

        except Transporter.DoesNotExist:
            return Response(
                {"error": "Transporter profile not found."},
                status=status.HTTP_404_NOT_FOUND
            )

class GardenSystems(APIView):
    def get (self,request):
        try:
         gardensystem=GardenSystemSerializer.objects.prefetch_related('images').all()
         serializer= GardenSystemSerializer(gardensystem,many=True)
         return Response (serializer.data,status=status.HTTP_200_OK)
        
        except GardenSystems.DoesNotExist:
            return Response(
                {'error':'No Garden systems found'},
                status=status.HTTP_404_NOT_FOUND
            )

class NewGardenSystems(APIView):
    def post (self,request):
    
     serializer= GardenSystemSerializer(data=request.data)
     if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status= status.HTTP_201_CREATED)

     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


##to upload the images

class UploadGardenSystemImage(APIView):
    def post(self,request,gardensystem_id):

        try:
            gardensystem = GardenSystems.objects.get(id=gardensystem_id)
        except GardenSystems.DoesNotExist:
            return Response({'error': 'Garden system not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer=GardenSystemImages(data=request.data)

        if serializer.is_valid():
            serializer.save(gardensystem=gardensystem)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



>>>>>>> 188ef061ad30c24d8fbba9e2bbea3da4f00e3f7f
