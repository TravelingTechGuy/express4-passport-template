/**
 * Main App file
 */

'use strict';

//express 4 and new modules
var express = require('express'),
	app = express(),
	favicon = require('static-favicon'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	bodyParser = require('body-parser'),
	compress = require('compression'),
	methodOverride = require('method-override');

//regular modules
var path = require('path'),
	flash = require('connect-flash'),
	passport = require('./config/passport')(),	// pass passport for configuration
	db = require('./config/database')();			// connect to our database

//all environments
app.set('port', process.env.PORT || 3000);								//app port
app.set('views', path.join(__dirname, 'views'));						//views folder
app.set('view engine', 'ejs');											//set view engine to EJS
app.use(favicon(path.join(__dirname, 'public/images/favicon.ico')));	//handle favicon request - remove path to use default Express icon
app.use(express.static(path.join(__dirname, 'public')));				//set the static files location /public/img will be /img for users
app.use(logger('dev'));													//log every request to console
app.use(compress());													//gzip
app.use(bodyParser.json());												//parse body json POST requests
app.use(bodyParser.urlencoded());										//parse body POST requests
app.use(cookieParser());												//parse cookies in header
app.use(session({secret: 'keyboard cat'}));								//set session with secret
app.use(flash());														//use session flash, to transfer messages
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride());												//simulate DELETE and PUT
app.disable('x-powered-by');											//remove Express from return header

//app variables
var env = app.get('env'),
	port = app.get('port'),
	appName = require('./package').name;

/**
* Routes - error routes must be last!
*/
app.use('/', require('./routes'));
app.use('/users', require('./routes/users')(passport));
app.use(require('./routes/error')(env));

/**
* Start server
*/
var server = app.listen(port, function() {
	console.log('%s (%s) listening on port %s', appName, env, port);
});
