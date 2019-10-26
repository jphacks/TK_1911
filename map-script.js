// JavaScript source code

//var request =  require('request');
//var express = require('express');
var infoWindow;
var map;
var marker;
var center = {
    lat: 35.748332, // �ܓx
    lng: 139.806168 // �o�x
};
var shelter_data = {
    name: "�����d�@��w",
    lat: 0,
    lng: 0,
    count: 10,
    co2: 0
};

window.onload = function initMap() {
    map = new google.maps.Map(document.getElementById('map'), { // #sample�ɒn�}�𖄂ߍ���
        center: center,
        zoom: 19, // �n�}�̃Y�[�����w��
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
    }); //�}�[�J�[�̐ݒ�

    var contentString =
        '<div id="content"><h3 id="facilityName" class="facilityName">' + shelter_data.name + '</h3 >'
        + '< div id = "bodyContent" > <p> count:' + shelter_data.count + '/2500 +</p> '
        + '< button id = "my-button" > �ڍׂ�����</button>'
        +'< div id = "element_to_pop_up" > hello!</div></div ></div > ';

    infoWindow = new google.maps.InfoWindow({
        content: contentString
    });
    infoWindow.open(map, marker); //�����o���̕\��

}
function getInfoWindow() {
    infoWindow.open(map, marker);
};

function savePosition() {
    if (!navigator.geolocation) {
        console.log("gps���Ή����Ă��܂���");
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

    marker = new google.maps.Marker({ // �}�[�J�[�̒ǉ�
        position: center, // �}�[�J�[�𗧂Ă�ʒu���w��
        map: map // �}�[�J�[�𗧂Ă�n�}���w��
    });
}

function infomation() {
    infoWindow = new google.maps.InfoWindow({ // �����o���̒ǉ�
        content: '<div class="sample">�����d�@��w</div>'
        // �����o���ɕ\��������e
    });
    marker.addListener('click', function () { // �}�[�J�[���N���b�N�����Ƃ�
        infoWindow.open(map, marker); // �����o���̕\��
    });
}

function getInformation() {
    var url = 'https://127.0.0.1:3000/get_shelterData';
    
}