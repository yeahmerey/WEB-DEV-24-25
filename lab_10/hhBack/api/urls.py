from django.contrib import admin
from django.urls import path
#from api import views , views_w_ser , views_w_m_ser
# from api.views import  CompanyList , CompanyDetail , VacancyDetail , VacancyList , CompanyVacancies , TopVacancies
from api.views import CompanyVacanciesAPIView , VacancyDetailAPIView , CompanyDetailAPIView , VacancyListAPIView , TopTenVacanciesAPIView , CompanyListAPIView
urlpatterns = [
    path('companies/', CompanyListAPIView.as_view(), name='company_list'), 
    path('companies/<int:company_id>/' , CompanyDetailAPIView.as_view()), 
    path('companies/<int:company_id>/vacancies/' , CompanyVacanciesAPIView.as_view()), 
    path('vacancies/' , VacancyListAPIView.as_view()), 
    path('vacancies/<int:vacancy_id>' , VacancyDetailAPIView.as_view()), 
    path('vacancies/top10/' ,TopTenVacanciesAPIView.as_view()), 
]
