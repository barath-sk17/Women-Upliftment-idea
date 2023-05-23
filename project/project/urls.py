
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from api import views
from django.conf.urls.static import static
from django.conf import settings
from api.views import ComplaintViewSet,SuggestionViewSet

router = routers.DefaultRouter()
router.register(r'complaint',ComplaintViewSet)

router1 = routers.DefaultRouter()
router1.register(r'suggestion',SuggestionViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('mail/',views.home,name="home"),
    path('', include(router1.urls)),
    path('', include(router.urls)),
    path('check/',views.hello,name="hello"),
    path('uploadfile/',views.uploadfile,name="uploadfile"),
]

urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
