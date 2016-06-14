'use strict';

angular.module('app')
    .controller('NavbarController', NavbarController);

/** @ngInject */
function NavbarController($scope,$state,Session,$rootScope) {


    $scope.menu = $state;
    $scope.goLogin = function(){
        $state.go('login');
    };

    $scope.goSignup = function(){
        $state.go('register');
    };

    $scope.goHome = function(){
        console.log($scope.admin);
        if(!$scope.admin){
            if(!Session.get('user') || !Session.get('user').user || Session.get('user').user===''){
                $state.go('home');
            }
            else{
                $state.go('dashboard');
            }
        }
        else{
            $state.go('admin-dashboard');
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

    $scope.goInventario = function(){
        $state.go('inventario');
    };

    $scope.goReportes = function(){
        $state.go('reportes');
    };


}
