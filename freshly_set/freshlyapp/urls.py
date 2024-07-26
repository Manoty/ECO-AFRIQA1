from django.contrib import admin
from django.urls import path
from django.contrib.auth import views as auth_views
from django.urls import re_path
from .views import CustomPasswordResetView, logout_view
from .forms import  MyPasswordChangeForm, MyPasswordResetForm, MySetPasswordForm
from . import views

from .views import (
    BlogListCreateAPIView, BlogRetrieveUpdateDestroyAPIView, 
    CommentListCreateAPIView, CommentRetrieveUpdateDestroyAPIView, 
    LikeCreateAPIView, ShareCreateAPIView
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('blogs/', views.blogs, name='blogs'),
    path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('signup/', views.signup, name='signup'),
    path('logout/', logout_view, name='logout'),
    path('password_change/', auth_views.PasswordChangeView.as_view(template_name='password_change.html'), name='password_change'),
    path('password_change/done/', auth_views.PasswordChangeDoneView.as_view(template_name='password_change_done.html'), name='password_change_done'),
    path('password_reset/', CustomPasswordResetView.as_view(), name='password_reset'),
    path('password_reset/done/',auth_views.PasswordResetDoneView.as_view(template_name='password_reset_done.html'),name='password_reset_done'),
    path('reset/<uidb64>/<token>/',auth_views.PasswordResetConfirmView.as_view(template_name='password_reset_confirm.html'), 
    name='password_reset_confirm'),
    path('reset/done/',auth_views.PasswordResetCompleteView.as_view(template_name='password_reset_complete.html'), 
    name='password_reset_complete'),
    path('products/', views.products, name='products'),
    path('services/', views.services, name='services'),
    path('profile/', views.profile, name='profile'),
    path('blogs/', BlogListCreateAPIView.as_view(), name='blog_list_create'),
    path('blogs/<int:pk>/', BlogRetrieveUpdateDestroyAPIView.as_view(), name='blog_detail'),
    path('comments/', CommentListCreateAPIView.as_view(), name='comment_list_create'),
    path('comments/<int:pk>/', CommentRetrieveUpdateDestroyAPIView.as_view(), name='comment_detail'),
    path('likes/', LikeCreateAPIView.as_view(), name='like_create'),
    path('shares/', ShareCreateAPIView.as_view(), name='share_create'),
]
