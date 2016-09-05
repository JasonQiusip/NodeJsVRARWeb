const http = require('http');
const express = require('express');
const cookieParser = require('cookie-parser');

const port = 3000;

const app = express();
app.use(express.static(__dirname+'/src')).use(cookieParser());

app.get('/index.html', (req, res) => {
  
})

var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
