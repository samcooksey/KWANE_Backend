
'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');

var port = process.env.PORT || 3000;
var app = express();

require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

var api = require('./routes/routes');
app.use('/api', api);

app.listen(port, function(){
  console.log('Application is running on port:', port);
});
