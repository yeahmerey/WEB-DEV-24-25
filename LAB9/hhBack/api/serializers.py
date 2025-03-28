from rest_framework import serializers 

class CompanySerializer(serializers.Serializer) : 
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

