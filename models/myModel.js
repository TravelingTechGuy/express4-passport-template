/**
* My Model
*/

'use strict';

var debug = require('debug')('myModel');

exports.getTitle = function() {
	debug('did you call?');
	return 'Express';
};