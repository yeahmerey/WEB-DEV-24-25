from django.contrib import admin
from django.urls import path
#from api import views , views_w_ser , views_w_m_ser
from api.views import  CompanyList , CompanyDetail , VacancyDetail , VacancyList , CompanyVacancies , TopVacancies

urlpatterns = [
    path('companies/', CompanyList.as_view()), 
    path('companies/<int:company_id>/' , CompanyDetail.as_view()), 
    path('companies/<int:company_id>/vacancies/' , CompanyVacancies.as_view()), 
    path('vacancies/' , VacancyList.as_view()), 
    path('vacancies/<int:vacancy_id>' , VacancyDetail.as_view()), 
    path('vacancies/top10/' ,TopVacancies.as_view()), 
]
