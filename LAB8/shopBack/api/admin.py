from django.contrib import admin

from api.models import Product 

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("id" , "name" , "price" , "description")
    search_fields = ("name" , "price")