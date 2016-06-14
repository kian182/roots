'use strict';

angular.module('app')
    .controller('NavbarController', NavbarController);

/** @ngInject */
function NavbarController($scope,$state,Session) {


    $scope.menu = $state;
    $scope.goLogin = function(){
        $state.go('login');
    };

    $scope.goSignup = function(){
        $state.go('register');
    };

    $scope.goHome = function(){
        if(!Session.get('user').user || Session.get('user').user===''){
            $state.go('home');
        }
        else{
            $state.go('dashboard');
        }
    };

    $scope.goDashboard = function(){
        $state.go('dashboard');
    };

    $scope.goReserva = function(){
        $state.go('reserva');
    };

    $scope.goProducto = function(){
        $state.go('producto');
    };

    $scope.goFacturacion = function(){
        $state.go('facturacion');
    };

}
