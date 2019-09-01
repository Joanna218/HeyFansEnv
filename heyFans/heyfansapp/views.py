from django.shortcuts import render
from django.shortcuts import HttpResponseRedirect,Http404,HttpResponse,render_to_response
import json
from django.http import HttpResponse,JsonResponse
from heyfansapp.models import MyTable,PersonalPage
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt
# Create your views here.
def index(request):
    query = 'SELECT Tag,Count(*) as 次數 FROM PersonalPage GROUP BY Tag'
    data = PersonalPage.objects.raw(query)
    return render(request, "index.html", locals())

def testDB(request):
  if request.method=='POST':
    data={
      'name':'zhangsan',
      'age':18,
    }
    return JsonResponse(data)
  else:
    query = 'SELECT * FROM MyTable'
    names = MyTable.objects.raw(query)
    # names=MyTable.objects.all()

    return render(request, "testDB.html", locals())
    #return render_to_response("testDB.html",locals())



