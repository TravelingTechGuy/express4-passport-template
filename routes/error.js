/**
* Error handlers
*/

'use strict';

module.exports = function(env) {
	var router = require('express').Router();

	// catch 404 and forwarding to error handler
	router.use(function(req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	router.use(function(err, req, res, next) {
		// development error handler will print stacktrace
		// production error handler no stacktraces leaked to user
		var error = {
			message: err.message,
			status: err.status,
			stack: (env === 'development') ? err.stack : ''
		};
		res.status(err.status || 500);
		if(!req.accepts('*/*') && req.accepts('application/json')) {
			//A json request will return a json error
			res.set({'Content-Type': 'application/json'});
			res.json(error);
		}
		else {
			res.render('error', error);
		}
	});
	
	return router;
};