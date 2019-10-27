# -*- coding: utf-8 -*-
"""
Created on Mon Oct 21 12:38:25 2019

@author: kouta
"""

import cv2


def capture():
    count = 0
    cap = cv2.VideoCapture(0)
    cap.set(3,1280)
    cap.set(4,750)
    
    while(True):
        ret,face = cap.read()
        cv2.imshow('face',face)
        
        flag,face = cascade_face(face)
        #print(len(face))
        
        if(flag != 0):
            count = count + face
            print("count:" + str(count))
        
        if(cv2.waitKey(250)&0xFF == ord('q')):
            print("finish")
            break
    
    
    
    cap.release()
    cv2.destroyAllWindows()
    
    return count

def cascade_face(img):
    face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

    #print(img.shape)
    #face = face_cascade.detectMultiScale(img)

    front_face_list = face_cascade.detectMultiScale(img, minSize = (100, 100))
    print(len(front_face_list))

    if len(front_face_list) == 0:
        print("Failed")
        return 0,img

    for (x,y,w,h) in front_face_list:
        #print("[x,y] = %dqq,%d [w,h] = %d,%d" %(x, y, w, h))
        cv2.rectangle(img, (x,y), (x+w, y+h), (0, 0, 255), thickness=10)

    for (x,y,w,h) in front_face_list:
        img = img[y:y+h, x:x+w]
        #cv2.imwrite(str(x+y) + ".jpg",img)

    return 1,len(front_face_list)

#request("https://tenki.jp/bousai/typhoon/japan-near/",10)