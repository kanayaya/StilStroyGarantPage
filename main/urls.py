from django.urls import include, path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('/about', views.about, name='about'),
    path('/contact', views.contact, name='contact'),
    path('/product', views.product, name='product'),
    path('/license', views.license, name='license'),
]