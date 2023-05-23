from django.db import models

import os
from Crypto.Signature import pkcs1_15
from Crypto.Hash import SHA256
from Crypto.PublicKey import RSA
from pathlib import Path
from django.contrib import messages
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart 
from email.mime.application import MIMEApplication
from Crypto.PublicKey import RSA

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Problem faced in Society
category_choice = (
    ('Domestic Violence','Domestic Violence'),
    ('Family Violence','Family Violence'),
    ('Sexual Violence and Harassment','Sexual Violence and Harassment'),
    ('Non Physical form of abuse','Non Physical form of abuse'),
)



# Create your models here.

class Complaint(models.Model):
    
    category = models.CharField(max_length=50, blank=True, null=True, choices=category_choice)
    date_time = models.DateTimeField(null=True)
    location = models.CharField(max_length=50, blank=True, null=True)
    description = models.CharField(max_length=1000,blank=True,null=True)
    evi_format = models.CharField(max_length=50,blank=True,null=True)
    evidence = models.FileField(upload_to=os.path.join(BASE_DIR / 'sample'))


class Suggestion(models.Model):
    suggestion_id = models.BigAutoField(primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    suggestion = models.CharField(max_length=1000)

    def __str__(self):
        return self.first_name
    
class Signature(models.Model):
    roll = models.CharField(max_length=200)
    text = models.FileField()
    public = models.FileField()
    signature = models.FileField()





