angular.module('alurapic', ['ngAnimate', 'ngRoute', 'ngResource', 'minhasDiretivas', 'meusServicos'])
	.config(function($rootScope, $routeProvider, $locationProvider) {

		$rootScope.$on('$routeChangeSuccess', function() {
			crumble.update();
		});

		$locationProvider.html5Mode(true);

		// $routeProvider.when('/fotos', {
		// 	templateUrl: 'partials/principal.html',
		// 	controller: 'FotosController'
		// });

		$routeProvider.when('/beneficiarios', {
			templateUrl: 'partials/principal.html',
			controller: 'BeneficiariosController',
			label: 'Beneficiario'
		});

		$routeProvider.when('/beneficiarios/new', {
			templateUrl: 'partials/beneficiario.html',
			controller: 'BeneficiarioController',
			label: 'Novo beneficiario'
		});
		
		// $routeProvider.when('/fotos/new', {
		// 	templateUrl: 'partials/foto.html',
		// 	controller: 'FotoController'
		// });

		// $routeProvider.when('/fotos/edit/:fotoId', {
		// 	templateUrl: 'partials/foto.html',
		// 	controller: 'FotoController'
		// });

		$routeProvider.otherwise({redirectTo: '/beneficiarios'});

	});