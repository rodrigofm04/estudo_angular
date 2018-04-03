angular.module('meusServicos', ['ngResource', 'ngRoute'])
	// .factory('breadcrumbs', ['$location', '$route', '$interpolate', 
	// 	function($location, $route, $interpolate) {

	// 		var ERR_NO_ROUTE = 'Could not find matching route definition for path ';
	// 		var ERR_NO_LABEL = 'Could not find property "label" of type "String" in route'
	// 						 + ' definition for path ';
	// 		var ERR_NO_PATH = 'No path given to getParent()';

	// 		var crumble = {
	// 			trail: [],
	// 			context: {},
	// 		  };
		  
	// 		  crumble.update = function(context) {
	// 			crumble.context = context || crumble.context;
	// 			crumble.trail = build($location.path());
	// 		  };
		  
	// 		  crumble.getParent = function(path) {
	// 			if (!path) {
	// 			  throw new Error(ERR_NO_PATH);
	// 			}
	// 			return path.replace(/[^\/]*\/?$/, '');
	// 		  };
		  
	// 		  crumble.getCrumb = function(path) {
	// 			var route = crumble.getRoute(path);
	// 			if (!route) {
	// 			  throw new Error(ERR_NO_ROUTE + JSON.stringify(path));
	// 			}
	// 			if (!angular.isString(route.label)) {
	// 			  throw new Error(ERR_NO_LABEL + JSON.stringify(path));
	// 			}
	// 			return {
	// 			  path: $interpolate(path)(crumble.context),
	// 			  label: $interpolate(route.label)(crumble.context),
	// 			};
	// 		  };
		  
	// 		  crumble.getRoute = function(path) {
	// 			var route = find($route.routes, function(route) {
	// 			  return route.regexp && route.regexp.test(path);
	// 			});
	// 			return (route && route.redirectTo)
	// 			  ? $route.routes[route.redirectTo]
	// 			  : route;
	// 		  };
		  
	// 		  function build(path) {
	// 			return path
	// 			  ? build(crumble.getParent(path)).concat(crumble.getCrumb(path))
	// 			  : [];
	// 		  }
		  
	// 		  function find(obj, fn, thisArg) {
	// 			for (var key in obj) {
	// 			  if (obj.hasOwnProperty(key) && fn.call(thisArg, obj[key], key, obj)) {
	// 				return obj[key];
	// 			  }
	// 			}
	// 		  }
		  
	// 		  return crumble;
	// }])
	.factory('recursoFoto', function($resource) {
		return $resource('/v1/fotos/:fotoId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
	.factory("cadastroDeFotos", function(recursoFoto, $q) {
		var service = {};
		service.cadastrar = function(foto) {
			return $q(function(resolve, reject) {

				if(foto._id) {
					recursoFoto.update({fotoId: foto._id}, foto, function() {
						resolve({
							mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar a foto ' + foto.titulo
						});
					});

				} else {
					recursoFoto.save(foto, function() {
						resolve({
							mensagem: 'Foto ' + foto.titulo + ' incluída com sucesso',
							inclusao: true
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível incluir a foto ' + foto.titulo
						});
					});
				}
			});
		};
		return service;
    });