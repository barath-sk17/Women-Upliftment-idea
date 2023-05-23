from django import forms

class SignatureForm(forms.Form):
    studentroll=forms.CharField(widget=forms.TextInput(attrs={'placeholder':'*file name', 'style':'width: 50%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;'}))
    text_file=forms.FileField(widget=forms.FileInput(attrs={'style':'width: 50%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;'}))
    public_file=forms.FileField(widget=forms.FileInput(attrs={'style':'width: 50%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;'}))
    signature_file=forms.FileField(widget=forms.FileInput(attrs={'style':'width: 50%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;'}))    
