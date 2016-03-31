// config/providers.js

var providers = {

	'facebook': {
		'clientID': '*************'
		,'clientSecret': '***********'
		,'callbackURL': 'http://localhost:3333/auth/facebook/callback'
		,'redirect': {
			'successRedirect': '/'
			,'failureRedirect' : '/'
		}
	}

}

module.exports = providers;