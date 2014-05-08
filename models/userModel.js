/**
* Users Model
*/

'use strict';

var mongoose = require('mongoose'),
	bcrypt   = require('bcrypt-nodejs'),
	debug = require('debug')('userModel');

// define the schema for our user model
var userSchema = mongoose.Schema({
	local: {
		email: 			String,
		password: 		String,
		created: 		Date,
		lastAccessed: 	Date
	},
	facebook: {
		id: 			String,
		token: 			String,
		email: 			String,
		name : 			String,
		created: 		Date,
		lastAccessed: 	Date
	},
	twitter: {
		id: 			String,
		token: 			String,
		displayName: 	String,
		username: 		String,
		created: 		Date,
		lastAccessed: 	Date
	},
	google: {
		id: 			String,
		token: 			String,
		email: 			String,
		name: 			String,
		created: 		Date,
		lastAccessed: 	Date
	}
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
