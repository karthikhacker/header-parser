const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname + '/public')));

//routes
app.get('/',(req,res) => {

  var lang = req.acceptsLanguages()
  var ip = req.ip;
  var os = req.get('user-agent');
  res.json({"Language" : lang[0],"operating system" : os,  'IP' : ip});
});
//server
app.listen(port,() => {
  console.log('App running at port',port);
});
