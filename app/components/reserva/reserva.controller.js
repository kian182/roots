'use strict';

angular.module('app')
    .controller('ReservaController', ReservaController);

/** @ngInject */
function ReservaController($scope) {

    $scope.selected = '';
    $scope.tableStatus = '';
    $scope.message = '';
    $scope.select = function(option,status){
        $scope.clear();
        /** TODO: Move to directive*/
        if($scope.selected===option){
            angular.element('.'+option).removeClass('focus');
            $scope.resetValues();
        }
        else{
            angular.element('.'+option).addClass('focus');
            //angular.element('.'+option).css('background-color','#CD853F');
            $scope.selected = option;
            $scope.tableStatus = status;
        }
    };

    $scope.clear = function(){
        for(var i=0;i<12;i++){
            angular.element('.'+i).removeClass('focus');
        }
    };

    $scope.registerTable = function(){
        if($scope.tableStatus ===''){
            $scope.message = 'Seleccione una mesa';
            return;
        }
        switch($scope.tableStatus){
            case 'green':
                $scope.message = 'Se ha reservado la mesa '+$scope.selected;
                break;
            case 'yellow':
                $scope.message = 'La mesa '+$scope.selected+' ya esta reservada.';
                break;
            case 'red':
                $scope.message = 'La mesa '+$scope.selected+' esta ocupada.';
                break;
        }

    };

    $scope.resetValues = function(){
        $scope.selected = '';
        $scope.tableStatus = '';
        $scope.message = '';
    };

}
