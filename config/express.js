var engines = require('consolidate');

module.exports = function (express, app) {
    app.engine('html', engines.qejs);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/../app/views');

    app.use(express.static(__dirname + '/../public'));
};