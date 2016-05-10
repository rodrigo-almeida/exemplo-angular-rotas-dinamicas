(function(){
    'use strict';
    
    var app = angular.module('app', ['ngRoute']);
    
    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        
        /*
            O segredo para resolver o problema das rotas é criar uma referência para
            o provider [routeProvider], permitindo que ele seja acessado posteriormente.
        */
        app._rotas = $routeProvider;
        
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        
        $routeProvider
        .when('/', {
            templateUrl: 'home.html'
        })
        .when('/antes', {
            templateUrl: 'antes.html',
            controller: 'antesCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);
    
    app.controller('antesCtrl', function($rootScope, $location, rotas, $scope){
        console.log('clicou em "antes"!');
        $rootScope.activeTab = $location.path();
        
        //Seta uma nova rota (depois da "run phase" do angular)
        $scope.novaRota = function(rota){
            rotas(rota);
            console.log('A rota [/' + rota + '] foi criada!');
        }
    });
    
    app.controller('depoisCtrl', function($rootScope, $location){
        console.log('clicou em "depois"!');
        $rootScope.activeTab = $location.path();
    });
}());