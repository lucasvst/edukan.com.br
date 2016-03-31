// config/auth.js

var providers = require('./providers');

var Auth = function(providers) {

	return {
		'facebookAuth': providers.facebook
	};
};

module.exports = Auth(providers);