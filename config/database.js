/**
* MongoDB config file
*/
'use strict';

var url = 'mongodb://localhost/express-passport';

module.exports = function() {
	var mongoose = require('mongoose');
	mongoose.connect(url);
	mongoose.connection.on('error', function(err) {
		console.error('Mongoose connection error ' + err.message);
		process.exit(-1);
	});
	return mongoose;
};