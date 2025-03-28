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
        companies_json = [c.to_json() for c in companies]
        return JsonResponse(companies_json , safe=False)    



        #s-serializer = CompanySerializer2(companies , many = True)##many , expects only one obj , if many = false , default is false
        #s-return JsonResponse(serializer.data , safe = False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        try: 
            company = Company.objects.create(
                name = data['name'], 
                description = data['description'],
                city = data['city'],
                address = data['address'],
            )
        except Exception as e :
            return JsonResponse({'error' : str(e)})    


        return JsonResponse(company.to_json() , status=201)
        #s-serializer = CompanySerializer2(data=data)
        #s-if serializer.is_valid():
        #s-    serializer.save()
        #s-    return JsonResponse(serializer.data , status = 201)
        #s-return JsonResponse(serializer.errors, status=400)
@csrf_exempt
def company_detail(request, company_id=None):
    try : 
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:     
        return JsonResponse({'error' : str(e)} , status=404)
    
    if request.method == 'GET' : 
        return JsonResponse(company.to_json(), status=200)
        
        #s-serializer = CompanySerializer(company)
        #s-return JsonResponse(serializer.data , status=200)
    elif request.method == "PUT" : 
        new_data = json.loads(request.body)
        company.name = new_data['name']
        company.description = new_data['description']
        company.city = new_data['city']
        company.address = new_data['address']
        company.save()
        return JsonResponse(company.to_json())
        

        #s-serializer = CompanySerializer2(instance=company, data=new_data)#in put we need 
        #s-if serializer.is_valid():
        #s-    serializer.save()
        #s-    return JsonResponse(serializer.data , status = 201)
        #s-return JsonResponse(serializer.errors, status=400)   
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

