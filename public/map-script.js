// JavaScript source code

//var request =  require('request');
//var express = require('express');
var infoWindow;
var map;
var marker;
var father_marker;
var mother_marker;
var my_maker;


var center = {
    lat: 35.748332, // 緯度
    lng: 139.806168 // 経度
};
var me = {
    name: "me",
    lat: 35.748,
    lng:139.808
}


var father = {
    name:"father",
    lat: 35.7474,
    lng: 139.805
};

var mother = {
    name:"mother",
    lat: 35.7485,
    lng: 139.808
};

var shelter_data = {
    name: "Tokyo Denki University",
    lat: center.lat,
    lng: center.lng,
    count: 100,
    co2: 0
};

function set(count, co2) {
    shelter_data.count = count;
    shelter_data.co2 = co2;
    console.log("hello");
    console.log(shelter_data);
};

var meString = '<h3 id="facilityName" class="facilityName">' + me.name + '</h3 >';
var fatherString = '<h3 id="facilityName" class="facilityName">' + father.name + '</h3 >' +'<p><img src = "/image/father_logo.png" width = "50px" height = "50px"></img></p>';
var motherString = '<h3 id="facilityName" class="facilityName">' + mother.name + '</h3 >' + '<p><img src = "/image/mother_logo.png" width = "50px" height = "50px"></img></p>';

 function initMap() {
    map = new google.maps.Map(document.getElementById('map'), { // #sampleに地図を埋め込む
        center: center,
        zoom: 19, // 地図のズームを指定
        mapTypeId: 'roadmap'
     });
     var contentString =
         '<h3 id="facilityName" class="facilityName">' +
         shelter_data.name + '</h3>' +
         '<p>' +shelter_data.count + '/2500 ' +
         '<img src = "/image/tdu_outline_01.jpg" width="100px" height="50px" class = "image"></img></p>' +
          '<a button id="my-button" href="/information_detail">view the details</button></a>' +
         '<div>ふあんど: ' + shelter_data.co2 + '</div> ';

    pos = savePosition();
     console.log(pos);

     my_marker = new google.maps.Marker({
         position: me,
         map: map,
     }); //マーカーの設

    makeMaker(marker, center, contentString);
    makeMaker(father_marker, father, fatherString);
    makeMaker(mother_marker, mother, motherString);

    //get_now_position(pos);

    //getInformation();
    //marker.addListener('click', getInfoWindow());
};

function makeMaker(markers,position,contents) {
    markers = new google.maps.Marker({
        position: position,
        map: map,
        icon: {
            url: '/image/marker.png',
            scaledSize: new google.maps.Size(40, 40)//マーカー画像のサイズ
        }
    }); //マーカーの設定

    infoWindow = new google.maps.InfoWindow({
        content: contents,
        maxWidth: 250
    });
    infoWindow.open(map, markers); //吹き出しの表示
}

function getInfoWindow(markers) {
    infoWindow.open(map, markers);
};
function get_now_position(pos) {
    var maker = new google.maps.Marker({
        position: pos,
        map:map
    });
};

function savePosition() {
    if (!navigator.geolocation) {
        console.log("gpsが対応していません");
        return 0;
    }
    pos = navigator.geolocation.getCurrentPosition(success);
    console.log(pos);
    return pos;
}

function success(pos) {
    var crd = pos.coords;
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    return crd;
}

function infomation() {
    infoWindow = new google.maps.InfoWindow({ // 吹き出しの追加
        content: '<div class="sample">東京電機大学</div>'
        // 吹き出しに表示する内容
    });
    marker.addListener('click', function () { // マーカーをクリックしたとき
        infoWindow.open(map, marker); // 吹き出しの表示
    });
}

/* function getInformation() {
    var url = "https://127.0.0.1:3000/get";
    var request = new XMLHttpRequest();

    request = open("GET", url);
    request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    request.send("status=true");
    console.log(request.responseText);
    }; */