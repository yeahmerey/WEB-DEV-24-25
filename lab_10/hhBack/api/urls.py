
from django.contrib import admin
from django.urls import path
from api import views , views_w_ser , views_w_m_ser
urlpatterns = [
    path('companies/', views_w_m_ser.companies_list), 
    path('companies/<int:company_id>/' , views_w_m_ser.company_details), 
    path('companies/<int:company_id>/vacancies/' , views_w_m_ser.company_vacancies), 
    path('vacancies/' , views_w_m_ser.vacancies_list), 
    path('vacancies/<int:vacancy_id>' , views_w_m_ser.vacancy_details), 
    path('vacancies/top10/' , views_w_m_ser.topTen_vacancies), 
]
