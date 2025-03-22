from django.urls import path , re_path
from api import views
urlpatterns = [
    path('hello/', views.hello_world),
    path('about/' , views.about),
    re_path(r'^time/plus/(\d+)/$', views.hour_ahead),
    path("test-json/", views.test_json), 
    path('products/', views.products_list)
]   
