from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from oracleRep.settings import connection

def landing(request):
    if(request.method=="POST"):
        print(request.POST)
        cursor = connection.cursor()
        res = cursor.execute("""
        select column_name
        from user_tab_cols
        where table_name = 'BANKDATA'
    """)
        for i in res:
            print(i)
        return JsonResponse({'status':"ok", "next":"/"})
    return render(request,"landing.html")

def report(request):
    return render(request, 'report.html')