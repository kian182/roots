(function() {
    'use strict';

    angular
        .module('app')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/components/login/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'app/components/register/register.html',
                controller: 'RegisterController',
                controllerAs: 'register'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'app/components/dashboard/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'dashboard'
            })
            .state('reserva', {
                url: '/reserva',
                templateUrl: 'app/components/reserva/reserva.html',
                controller: 'ReservaController',
                controllerAs: 'reserva'
            })
            .state('producto', {
                url: '/producto',
                templateUrl: 'app/components/producto/producto.html',
                controller: 'ProductoController',
                controllerAs: 'producto'
            })
            .state('facturacion', {
                url: '/facturacion',
                templateUrl: 'app/components/facturacion/facturacion.html',
                controller: 'FacturacionController',
                controllerAs: 'facturacion'
            })
            .state('admin-dashboard', {
                url: '/admin/dashboard',
                templateUrl: 'app/components/admin/dashboard/dashboardAdmin.html',
                controller: 'AdminDashboardController',
                controllerAs: 'adminDashboard'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
