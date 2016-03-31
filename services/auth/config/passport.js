// config/passport.js

var FacebookStrategy = require('passport-facebook').Strategy;

var User = require('../domain/user');

var providers = require('./providers');

module.exports = function(passport) {

	passport.serializerUser(function(user, cbk) {
		cbk(null, user.id);
	});

	passport.deserializeUser(function(id, cbk) {
		User.findById(id, function(err, user) {
			cbk(err, user);
		});
	});

	passport.use(new FacebookStrategy(providers.facebook),

		function (token, refreshToken, profile, cbk) {

			process.nextTick(function() {

				User.findOne({ 'facebook.id' : profile.id }, function(err, user) {

					if (err)
						return cbk(err);

					if (user) {
						return cbk(null, user);

					} else {

						var newUser = new User();

						newUser.facebook.id = profile.id;
						newUser.facebook.token = token;
						newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
						newUser.facebook.email = profile.emails[0].value;

						newUser.save(function(err) {

							if (err)
								throw err;

							return cbk(null, newUser);

						});
					}

				});
			});

	});
}