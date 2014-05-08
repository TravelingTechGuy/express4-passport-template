Express4-Passport template
==========================

A template for a new project based on Express4, using Passport with a Local Strategy.
The project also uses debug, models, and separate routers.

To use this template, follow these steps:

	$ git clone https://github.com/TravelingTechGuy/express4-template.git
	$ cd ./express4-template
	$ npm install
	$ node app

If you have [nodemon](https://github.com/remy/nodemon/) installed, just type `nodemon`.

Main features of this template:
------------------------------
1. Commented app.js
2. Express modules used:
	1. Body Parser
	2. Cookie Parser
	3. Logger
	4. Favicon
	5. Compression
	6. Method Override
3. Separation or models, views, and routes
4. Separation of routers
5. Errors router
6. Errors returned in JSON format if the request header contains `Accept: application/json`
7. Separate debug calls in every module - run `npm start` to get all debug messages
