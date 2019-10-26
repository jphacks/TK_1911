// JavaScript source code

//var request =  require('request');
//var express = require('express');
var infoWindow;
var map;
var marker;
var center = {
    lat: 35.748332, // 緯度
    lng: 139.806168 // 経度
};
var shelter_data = {
    name: "東京電機大学",
    lat: 0,
    lng: 0,
    count: 10,
    co2: 0
};

window.onload = function initMap() {
    map = new google.maps.Map(document.getElementById('map'), { // #sampleに地図を埋め込む
        center: center,
        zoom: 19, // 地図のズームを指定
        mapTypeId: 'roadmap'
    });
    savePosition();
    makeMaker();
    //getInformation();
    //marker.addListener('click', getInfoWindow());
}

function makeMaker() {
    marker = new google.maps.Marker({
        position: center,
        map: map
    }); //マーカーの設定

    var contentString =
        '<div id="content"><h3 id="facilityName" class="facilityName">' + shelter_data.name + '</h3 >'
        + '< div id = "bodyContent" > <p> count:' + shelter_data.count + '/2500 +</p> '
        + '< button id = "my-button" > 詳細を見る</button>'
        +'< div id = "element_to_pop_up" > hello!</div></div ></div > ';

    infoWindow = new google.maps.InfoWindow({
        content: contentString
    });
    infoWindow.open(map, marker); //吹き出しの表示

}
function getInfoWindow() {
    infoWindow.open(map, marker);
};

function savePosition() {
    if (!navigator.geolocation) {
        console.log("gpsが対応していません");
        return 0;
    }
    pos = navigator.geolocation.getCurrentPosition(success);
    console.log(pos);
}

function success(pos) {
    var crd = pos.coords;
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    var center = {
        lat: 36.748332,
        lng: 139.806168
    };

    marker = new google.maps.Marker({ // マーカーの追加
        position: center, // マーカーを立てる位置を指定
        map: map // マーカーを立てる地図を指定
    });
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

function getInformation() {
    var url = 'https://127.0.0.1:3000/get_shelterData';
    
}