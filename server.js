var express = require('express');
var app = express();


app.get('/',function(req,res) {

  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var op = req.headers['user-agent'].split(/\(/)[1];
  console.log('yay',op);
  var d = {
    "IP Address": ip,
    "Language": req.headers['accept-language'],
    "Operating System": op 
  }

  console.log(req.headers['user-agent'],req.headers['accept-language']);
  res.send(d);
});

app.listen(process.env.PORT);
