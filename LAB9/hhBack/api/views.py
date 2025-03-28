import json
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.models import Company , Vacancy
from api.serializers import CompanySerializer, CompanySerializer2
#read
@csrf_exempt
def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()

        serializer = CompanySerializer2(companies , many = True)##many , expects only one obj , if many = false , default is false

        return JsonResponse(serializer.data , safe = False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = CompanySerializer2(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data , status = 201)
        return JsonResponse(serializer.errors, status=400)
@csrf_exempt
def company_detail(request, company_id=None):
    try : 
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:     
        return JsonResponse({'error' : str(e)} , status=404)
    
    if request.method == 'GET' : 
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data , status=200)
    elif request.method == "PUT" : 
        new_data = json.loads(request.body)
        
        serializer = CompanySerializer2(instance=company, data=new_data)#in put we need 

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data , status = 201)
        return JsonResponse(serializer.errors, status=400)   
    elif request.method == 'DELETE' : 
        company.delete()
        return JsonResponse({'message' : 'Product was deleted'})
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

