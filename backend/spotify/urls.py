from django.urls import path, include

urlpatterns = [
    path('api/auth/', include('user_auth.urls')),   # Đăng ký, đăng nhập, refresh token
    path('api/users/', include('users.urls')), # Lấy thông tin user
]
