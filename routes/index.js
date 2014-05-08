/**
 * Main routes
 */
'use strict';

var router = require('express').Router(),
	debug = require('debug')('index'),
	model = require('../models/myModel');

/* GET home page. */
router.get('/', function(req, res) {
	var title = model.getTitle();
	debug('title: %s', title);
	res.render('index', { title: title });
});

module.exports = router;
