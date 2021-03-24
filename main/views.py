from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse

def landing(request):
    if(request.method=="POST"):
        print(request.POST)
        return JsonResponse({'status':"ok", "next":"/"})
    return render(request,"landing.html")

def report(request):
    return render(request, 'report.html')