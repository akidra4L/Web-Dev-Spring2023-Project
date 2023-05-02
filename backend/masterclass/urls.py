from django.urls import path
from .views import masterclass_list, masterclass_create, masterclass_detail


urlpatterns = [
    path('masterclass/',masterclass_list, name='masterclass-list'),
    path('masterclass/create/', masterclass_create, name='masterclass-create'),
    path('masterclass/<int:id>/', masterclass_detail, name='masterclass-detail')

]
