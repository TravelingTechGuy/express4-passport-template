Express4-Passport template
==========================

A template for a new project based on Express4, using Passport with a Local Strategy.
The project also uses debug, models, and separate routers.

To use this template, follow these steps:

	$ git clone https://github.com/TravelingTechGuy/express4-passport-template.git
	$ cd ./express4-passport-template
	$ npm install
	$ node app

If you have [nodemon](https://github.com/remy/nodemon/) installed, just type `nodemon`.

Main features of this template:
------------------------------
1. Commented app.js
2. Passport with a Local Strategy - with model placeholders for Twitter, Facebook, or Google strategies
3. Express modules used:
	1. Body Parser
	2. Cookie Parser
	3. Logger
	4. Favicon
	5. Compression
	6. Method Override
	7. passport and passport-local
	8. bcrypt-json
4. Separation or models, views, and routes
5. Separation of routers
6. Errors router
7. Errors returned in JSON format if the request header contains `Accept: application/json`
8. Separate debug calls in every module - run `npm start` to get all debug messages
