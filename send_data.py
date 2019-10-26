# -*- coding: utf-8 -*-
"""
Created on Sat Oct 26 09:58:42 2019

@author: kouta
"""

import requests
import json

def send(url,data):
    res = requests.post(url,data)
    return res

#data = {"count": 1,"name":"kouta"}

#send("http://127.0.0.1:3000",data)
#print(res)