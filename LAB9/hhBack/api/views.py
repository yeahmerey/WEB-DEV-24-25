from django.http import JsonResponse
from django.shortcuts import get_object_or_404, render

from api.models import Company , Vacancy


def companies_list(request):
    companies = Company.objects.all()
    companies_json = [c.to_json() for c in companies]
    return JsonResponse(companies_json , safe = False)

def company_detail(request, id):
    company = get_object_or_404(Company , id=id)
    return JsonResponse(company.to_json())

def company_vacancies(request , id) : 
    company = get_object_or_404(Company , id = id)
    vacancies = company.vacancies.all()
    return JsonResponse([v.to_json() for v in vacancies], safe=False)

def vacancies_list(request):
    vacancies= Vacancy.objects.all()
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json , safe=False)

def vacancy_details(request, id) :
    vacancy = get_object_or_404(Vacancy , id = id)
    return JsonResponse(vacancy.to_json())

