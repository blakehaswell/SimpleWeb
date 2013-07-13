var express = require("express");
var engines = require('consolidate');
var app = express();

app.engine('html', engines.qejs);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Serve static assets.
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.render("index");
});

app.listen(3001);