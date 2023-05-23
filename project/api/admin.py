from django.contrib import admin

# Register your models here.

from .models import Complaint,Suggestion,Signature

admin.site.register(Complaint)
admin.site.register(Suggestion)
admin.site.register(Signature)