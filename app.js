var express = require('express');
var app = express();

require('./config/express')(express, app);
require('./config/routes')(app);

app.listen(3001);