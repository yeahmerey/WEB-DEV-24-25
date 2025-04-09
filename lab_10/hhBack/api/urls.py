from django.contrib import admin
from django.urls import path
#from api import views , views_w_ser , views_w_m_ser
from api.views import  CompanyListAPIView , CompanyDetailAPIView , CompanyVacanciesAPIView 

urlpatterns = [
    path('companies/', CompanyListAPIView.as_view()), 
    path('companies/<int:company_id>/' , CompanyDetailAPIView.as_view()), 
    path('companies/<int:company_id>/vacancies/' , CompanyVacanciesAPIView.as_view()), 
    #path('vacancies/' , views_w_m_ser.vacancies_list), 
    #path('vacancies/<int:vacancy_id>' , views_w_m_ser.vacancy_details), 
    #path('vacancies/top10/' , views_w_m_ser.topTen_vacancies), 
]
