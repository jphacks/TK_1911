// JavaScript source code

var express = require('express');
const fs = require('fs');
var netatmo = require('netatmo');
var router = express.Router();
var app = express();
const path = require('path');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var __ = require('underscore');
var auth = {
    "client_id": "",
    "client_secret": "",
    "username": "",
    "password": "",
};
var api = new netatmo(auth);

app.set('views','public');
app.engine('html', cons.underscore);
app.set('view engine', 'html');
app.set('views', 'public');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static('public'));

app.use(express.static('./public'));

var shelter_data = {
    name: "sample",
    count: 0,
    co2: 50
};


var server = app.listen(3000, 'localhost', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Client is listening at http://%s:%s', host, port);
});

app.get("/", function (req, res) {
    console.log("get");
    //console.log("/map.html")
    //console.log(__dirname + "\\map.html");
    //res.sendFile(__dirname + '/map.html');
    //console.log("OK");
    res.render('map', { count: shelter_data.count, co2: shelter_data.co2 });
    //res.send("shelter_data");
    return 0;
});

app.get("/get", function (req, res) {
    console.log("OK");
    res.send(shelter_data);
});

app.post("/", function (req, res) {
    //console.log(req.body);
    data = req.body;
    data.count = Number(data.count);
    shelter_data.count = data.count + shelter_data.count;
    shelter_data.name = data.name;
    get_StationData(api);
    res.send("get data");
});

app.get("/information_detail", function (req, res) {
    console.log("hello");
    res.render('information_detail', { count: shelter_data.count, co2: shelter_data.co2 });
});

/*CO2‚Ìæ“¾‚ğs‚¤*/
function get_StationData(api){
    var data = api.getStationsData(function (err, devices) {
        console.log(devices[0].dashboard_data.CO2);
        shelter_data.co2 = devices[0].dashboard_data.CO2;
        if (shelter_data.co2 < 1000) {
            shelter_data.co2 = "ˆÀS";
        } else if (shelter_data <= 1000 && shelter_data.co2 <= 1500) {
            shelter_data.co2 = "•’Ê";
        } else {
            shelter_data.co2 = "•sˆÀ"
        };

        console.log(shelter_data);
    });
};
