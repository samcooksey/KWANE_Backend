
'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var port = process.env.NODE_PORT || 3000;
var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

var api = require('./routes/routes');
app.use('/api', api);

app.listen(port, function(){
  console.log('Application is running on port:', port);
});
