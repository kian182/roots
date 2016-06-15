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

    $scope.table3 = [
        {
            number: 1,
            code: '0009',
            name: 'Libras/Arroz',
            unit: 32,
            price : '4 Bs.'
        },
        {
            number: 2,
            code: '0010',
            name: 'Libra/Fideo (Pastas)',
            unit: 18,
            price : '8 Bs.'
        },
        {
            number: 3,
            code: '0011',
            name: 'Kg / Papa',
            unit: 26,
            price : '10 Bs.'
        },
        {
            number: 4,
            code: '0012',
            name: 'Libra/Lenteja',
            unit: 32,
            price : '7 Bs.'
        }
    ];

    $scope.table4 = [
        {
            number: 1,
            code: '0013',
            name: 'Ron Abuelo',
            unit: 112,
            price : '180 Bs.'
        },
        {
            number: 2,
            code: '0014',
            name: 'Rompope',
            unit: 76,
            price : '223 Bs.'
        },
        {
            number: 3,
            code: '0015',
            name: 'Whisky Chivas',
            unit: 44,
            price : '231 Bs.'
        },
        {
            number: 4,
            code: '0016',
            name: 'Jagermeister',
            unit: 53,
            price : '200 Bs.'
        }
    ];

    $scope.table5 = [
        {
            number: 1,
            code: '0017',
            name: 'Botellas de Coca Cola 2lts',
            unit: 56,
            price : '10 Bs.'
        },
        {
            number: 2,
            code: '0018',
            name: 'Botellas de Fanta 2lts',
            unit: 32,
            price : '10 Bs.'
        },
        {
            number: 3,
            code: '0019',
            name: 'Botellas de Sprite 2lts',
            unit: 43,
            price : '10 Bs.'
        },
        {
            number: 4,
            code: '0020',
            name: 'Botellas de Agua 2lts',
            unit: 53,
            price : '10 Bs.'
        },
        {
            number: 1,
            code: '0021',
            name: 'Botellas de Coca Cola 500ml',
            unit: 56,
            price : '4.5 Bs.'
        },
        {
            number: 2,
            code: '0022',
            name: 'Botellas de Fanta 500ml',
            unit: 32,
            price : '4.5 Bs.'
        },
        {
            number: 3,
            code: '0023',
            name: 'Botellas de Sprite 500ml',
            unit: 43,
            price : '4.5 Bs.'
        },
        {
            number: 4,
            code: '0024',
            name: 'Botellas de Agua 500ml',
            unit: 10,
            price : '3.5 Bs.'
        }
    ];

}
