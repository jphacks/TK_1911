// JavaScript source code
var netatmo = require('netatmo');
var auth = {
    "client_id": "5dae59d641a113a8b87a846e",
    "client_secret": "1yWExb8lDEPosTICCzv8zQUN9rPBfqeWRj7",
    "username": "16jk233@ms.dendai.ac.jp",
    "password": "@1115Tetu",
};
var api = new netatmo(auth);

funtion get_StationData(){
    var data = api.getStationsData(function (err, devices) {
        console.log(devices[0].dashboard_data.CO2);
        return devices[0].dashboard_data.CO2;
    });
};