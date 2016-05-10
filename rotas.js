(function(){
    angular.module('app')
    .factory('rotas', function(){
        return function(novaRota){
            angular.module('app')._rotas
            .when('/' + novaRota, {
                templateUrl: novaRota + '.html',
                controller: novaRota + 'Ctrl'
            })
        }
    });
}());