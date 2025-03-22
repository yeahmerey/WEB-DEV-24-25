# Create your views here.

from datetime import datetime , timedelta
from django.http import HttpResponse , HttpRequest

def hello_world(request) : 
    #request is instance oof HttpRequest

    #Logic
    return HttpResponse("Hello World")

def about(request) : 
    return HttpResponse("<h1>About</h1>")

def hour_ahead(request , hour):
    cur_time = datetime.now()

    new_time = cur_time + timedelta(hours =int(hour))
    #return HttpResponse(f"<h1>{cur_time}</h1>")
    return HttpResponse (f"<h1>Cur: {cur_time}</h1><h1>New : {new_time}</h1>")