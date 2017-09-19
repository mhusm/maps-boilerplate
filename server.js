var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

app.use('/dist', express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
  })


http.listen(process.env.PORT || 8080, function(){
   // console.log('listening on *:8080');
});