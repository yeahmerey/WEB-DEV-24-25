
from django.contrib import admin
from django.urls import path
from api import views
urlpatterns = [
   path('companies/' , views.companies_list), 
   path('companies/<int:company_id>/', views.company_detail),
   path('companies/<int:company_id>/vacancies/', views.company_vacancies),
   path('vacancies/', views.vacancies_list), 
   path('vacancies/<int:id>/', views.vacancy_details)
]
