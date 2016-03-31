(function(angular, undefined) {
	'use strict';

	angular.module('login').config(config);

	config.$inject = ['$routeProvider'];

	function config($routeProvider) {
		$routeProvider

        .when('/', {
            templateUrl: 'views/login.ejs',
            controller: 'LoginController',
            controllerAs: 'vm'
        })

        .otherwise({ redirectTo: '/' })
    }

})(angular);
