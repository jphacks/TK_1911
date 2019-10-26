// JavaScript source code

var express = require('express');
const fs = require('fs');

var router = express.Router();
var app = express();
const path = require('path');
var bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static('./public'));

var shelter_data = {
    name: "",
    lat: 0,
    lng: 0,
    count: 0,
    co2: 0
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
    res.sendFile(__dirname + '/map.html');
});

app.get("/get_shelter_Data", function (req, res) {
    console("get");
    res.send("OK");
});

app.post("/", function (req, res) {
    //console.log(req.body);
    data = req.body;
    console.log(data);

    shelter_data.count = req.body.count;
    shelter_data.name = req.body.name;
    console.log(shelter_data);
    res.send("get data");
});
