from rest_framework import serializers
from api.models import Complaint,Suggestion

class ComplaintSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Complaint
        fields = ['category','date_time','location','description','evi_format','evidence']


class SuggestionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Suggestion
        fields = ['suggestion_id','first_name','last_name','suggestion']

