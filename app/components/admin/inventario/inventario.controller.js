'use strict';

angular.module('app')
    .controller('InventarioController', InventarioController);

/** @ngInject */
function InventarioController($scope) {

    console.log('inventario');

    $scope.table1 = [
        {
            number: 1,
            code: '0001',
            name: 'Carne de res',
            unit: 58,
            price : '14 Bs.'
        },
        {
            number: 2,
            code: '0002',
            name: 'Carne de pollo',
            unit: 63,
            price : '12 Bs.'
        },
        {
            number: 3,
            code: '0003',
            name: 'Paquetes Salchichas',
            unit: 79,
            price : '12 Bs.'
        },
        {
            number: 4,
            code: '0004',
            name: 'Pescado',
            unit: 26,
            price : '30 Bs.'
        }
    ];

    $scope.table2 = [
        {
            number: 1,
            code: '0005',
            name: 'Libra/Tomate',
            unit: 21,
            price : '5 Bs.'
        },
        {
            number: 2,
            code: '0006',
            name: 'Paquete/Lechuga',
            unit: 44,
            price : '8 Bs.'
        },
        {
            number: 3,
            code: '0007',
            name: 'Libra/Zanahoria',
            unit: 20,
            price : '6 Bs.'
        },
        {
            number: 4,
            code: '0008',
            name: 'Col',
            unit: 39,
            price : '3 Bs.'
        }
    ];

}
