// auth/routes.js

var routes = function(app, passport) {

	app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

	app.get('/auth/facebook/callback',
		passport.authenticate('facebook', passport.redirect));
}

module.exports = routes;