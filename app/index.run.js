(function() {
    'use strict';

    angular
        .module('app')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log,$rootScope) {

        $log.debug('runBlock end');
        // Handle Authenticated States
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
            switch(toState.url){
                case '/':
                    $rootScope.background = "../app/components/images/restaurant.jpg";
                    break;
                case '/dashboard':
                    $rootScope.background = "../app/components/images/background-wood.jpg";
                    break;
                case '/reserva':
                    $rootScope.background = "http://backwatersbarandgrill.com/wp-content/uploads/2014/02/BWBG-Background.jpg";
                    break;
                case '/producto':
                    $rootScope.background = "http://backwatersbarandgrill.com/wp-content/uploads/2014/02/BWBG-Background.jpg";
                    break;
                case '/facturacion':
                    $rootScope.background = "http://backwatersbarandgrill.com/wp-content/uploads/2014/02/BWBG-Background.jpg";
                    break;
                case '/admin/inventario':
                    $rootScope.background = "http://backwatersbarandgrill.com/wp-content/uploads/2014/02/BWBG-Background.jpg";
                    break;
                case '/admin/reportes':
                    $rootScope.background = "http://backwatersbarandgrill.com/wp-content/uploads/2014/02/BWBG-Background.jpg";
                    break;
                default:
                    $rootScope.background = "../app/components/images/restaurant.jpg";
                    break;
            }
        });
    }

})();
