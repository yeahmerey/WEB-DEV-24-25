from rest_framework import serializers 
from api.models import Company

class CompanySerializer(serializers.Serializer) :
    name = serializers.CharField() 
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()
    
class CompanyModelSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Company 
        fields = ('name','description','city','address')

