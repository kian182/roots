'use strict';

angular.module('app')
    .controller('ProductoController', ProductoController);

/** @ngInject */
function ProductoController($scope) {

    $scope.prodSelection = 'bebidas';

    $scope.choose = function(option){
        $scope.prodSelection = option;
    };

}
