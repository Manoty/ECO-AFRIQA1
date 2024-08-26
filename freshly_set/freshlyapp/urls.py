from django.contrib import admin
from django.urls import path, re_path, include
from django.contrib.auth import views as auth_views
from django.urls import re_path
from rest_framework.routers import DefaultRouter
from .views import BlogListCreateView, BlogListView, CustomPasswordResetView, search_blog
from .views import PollListView, PollDetailView, PollCreateView, PollUpdateView, PollDeleteView
from .views import VoteNodeListView, VoteNodeDetailView, add_vote

from .forms import MyPasswordChangeForm, MyPasswordResetForm, MySetPasswordForm
from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


from .views import (
    BlogRetrieveUpdateDestroyAPIView,
    CommentListCreateAPIView, CommentRetrieveUpdateDestroyAPIView,
    LikeCreateAPIView, ShareCreateAPIView
)

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    # path('blogs/', views.blogs, name='blogs'),
    # path('freshlyapp/blogs/', BlogListView.as_view(), name='blog-list'),
    path('freshlyapp/create/', BlogListCreateView.as_view(),
         name='blog-list-create'),
    # path('create-blogs/', views.blog_create, name='blogs_create'),
    # path('freshlyapp/blogs/', views.blog_create, name='blog_create'),
    path('freshlyapp/search/', views.search_blog, name='search_blog'),


    path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    # path('signup/', views.signup, name='signup'),
    path('logout/', auth_views.LogoutView.as_view(next_page='login'), name='logout'),
    path('password_change/', auth_views.PasswordChangeView.as_view(
        template_name='password_change.html'), name='password_change'),
    path('password_change/done/', auth_views.PasswordChangeDoneView.as_view(
        template_name='password_change_done.html'), name='password_change_done'),
    path('password_reset/', CustomPasswordResetView.as_view(), name='password_reset'),
    path('password_reset/done/', auth_views.PasswordResetDoneView.as_view(
        template_name='password_reset_done.html'), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name='password_reset_confirm.html'),
         name='password_reset_confirm'),
    path('reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='password_reset_complete.html'),
         name='password_reset_complete'),
    path('products/', views.products, name='products'),
    path('services/', views.services, name='services'),
    path('profile/', views.profile, name='profile'),
    # path('blogs/', BlogListCreateAPIView.as_view(), name='blog_list_create'),
    path('blogs/<int:pk>/', BlogRetrieveUpdateDestroyAPIView.as_view(),
         name='blog_detail'),
    path('comments/', CommentListCreateAPIView.as_view(),
         name='comment_list_create'),
    path('comments/<int:pk>/',
         CommentRetrieveUpdateDestroyAPIView.as_view(), name='comment_detail'),
    path('likes/', LikeCreateAPIView.as_view(), name='like_create'),
    path('shares/', ShareCreateAPIView.as_view(), name='share_create'),
    path('search_blog/<int:pk>/', views.search_blog, name='search_blog'),
    path('freshlyapp/token/', TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('freshlyapp/token/refresh/',
         TokenRefreshView.as_view(), name='token_refresh'),

    # Poll URLs
    path('polls/', PollListView.as_view(), name='poll-list'),
    path('polls/create/', PollCreateView.as_view(), name='poll-create'),
    path('polls/<int:pk>/', PollDetailView.as_view(), name='poll-detail'),
    path('polls/<int:pk>/update/', PollUpdateView.as_view(), name='poll-update'),
    path('polls/<int:pk>/delete/', PollDeleteView.as_view(), name='poll-delete'),
    path('polls/<int:pk>/add_vote/', add_vote, name='poll-add-vote'),

    # VoteNode URLs
    path('votes/', VoteNodeListView.as_view(), name='vote-list'),
    path('votes/<int:pk>/', VoteNodeDetailView.as_view(), name='vote-detail'),
]
