# -*- coding: utf-8 -*-
"""
Created on Sat Oct 26 11:06:56 2019

@author: kouta
"""

import capture_face_count
import send_data
import cv2

data = {"count": 0,"name": "東京電機大学"}


def get_count(count):
    print(data["count"])
    data["count"] = count + data["count"]
    send_data.send("http://127.0.0.1:3000",data)

def roop():
    count = 0
    
    count = capture_face_count.capture()
    get_count(count)
    


roop()
#get_count(30)