from django.db import models


class Product(models.Model):
    title = models.CharField('Название товара', max_length=60)
    cost = models.CharField('Цена товара', max_length=30)
    shortdescription = models.TextField('Краткое описание')
    description = models.TextField('Описание товара')
    #product_image = models.ImageField('Изображение товара' ,upload_to='/article',
    #                                  height_field=100, width_field=100)

    def __str__(self):
        return self.title