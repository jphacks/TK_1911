// netatmoからCO2濃度[ppm]を取る．ウェザーステーションの更新は5分毎．
var netatmo = require('netatmo');
var auth = {
    "client_id": "5dae59d641a113a8b87a846e",
    "client_secret": "1yWExb8lDEPosTICCzv8zQUN9rPBfqeWRj7",
    "username": "16jk233@ms.dendai.ac.jp",
    "password": "@1115Tetu",
};

// 現時点でのCO2濃度[ppm]をlogで表示
var api = new netatmo(auth);
api.getStationsData(function(err, devices) {
    console.log(devices[0].dashboard_data.CO2);
  });