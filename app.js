/**
 * Module dependencies.
 */

var express = require('express');
var faye = require('faye');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

//db vars
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://admin:azerty@kahana.mongohq.com:10023/WKApp');

//faye server voor realtime gegevens
var bayeux = new faye.NodeAdapter({
    	mount: '/faye',
    	timeout: 45
    });
var server = http.createServer(app);
bayeux.attach(server);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//GET
app.get('/', routes.index);
app.get('/admin', routes.admin(db));
app.get('/scoreboard', routes.scoreboard(db));

//POST
app.post('/admin', routes.savechange(db));
app.post('/update', routes.update(db));
app.post('/leegmaken', routes.leegmaken(db));

server.listen(process.env.PORT ||3000);
console.log("App launched on port 3000");
