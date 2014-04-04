/**
* Created with javasaurio.
* User: jeroldangarcia
* Date: 2014-02-26
* Time: 05:38 PM
* To change this template use Tools | Templates.
*/
var flash = require('connect-flash')
, express = require('express')
, http = require('http')
, path = require('path')
, util = require('util')
, cons = require('consolidate');

var app = express();
app.engine('html', cons.swig);
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname+'/html');
app.set('view engine', 'html');
app.use(express.logger());
app.use(express.favicon());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use('/bower_components', express.static(__dirname+'/bower_components'));
app.use('/widgets', express.static(__dirname+'/widgets'));
app.use(express.static(__dirname + '/public'));

/*
app.use(express.session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
*/

require('./app/routes.js', app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});