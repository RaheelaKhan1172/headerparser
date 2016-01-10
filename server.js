var express = require('express');
var app = express();


app.get('/',function(req,res) {

  var i =  req.connection.remoteAddress;
  var op = req.headers['user-agent'].split(/\(/)[1];
  console.log('yay',op);
  var d = {
    "IP Address": i,
    "Language": req.headers['accept-language'],
    "Operating System": op 
  }

  console.log(req.headers['user-agent'],req.headers['accept-language']);
  res.send(d);
});

app.listen(process.env.PORT);
