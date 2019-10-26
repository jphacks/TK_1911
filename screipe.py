# -*- coding: utf-8 -*-
"""
Created on Sat Oct 26 11:08:04 2019

@author: kouta
"""

import requests
from bs4 import BeautifulSoup
import re
import uuid


def request(url,timeout):
    res = requests.get(url,allow_redirects=False, timeout=timeout)
    
    soup = BeautifulSoup(res.text,'lxml')
    
    imgs = soup.find_all('img')
    #print(imgs)

    for img in imgs:
        print(img['src'])
        #print(img['alt'])
        r = requests.get(img['src'])
        with open("./image/"+ str(uuid.uuid4())+str('.jpeg'),'wb') as file:
                file.write(r.content)
    
    return res