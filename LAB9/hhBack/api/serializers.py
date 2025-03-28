from rest_framework import serializers

from api.models import Company 

class CompanySerializer(serializers.Serializer) : 
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

class CompanySerializer2(serializers.ModelSerializer):
    class Meta : 
        model = Company 
        fields = ('id','name','description','city','address')
        