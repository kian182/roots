'use strict';

angular.module('app')
    .controller('RegisterController', RegisterController);

/** @ngInject */
function RegisterController($scope,$state,Session) {

    $scope.reg = {
        user: '',
        name: '',
        lastname:'',
        password:''
    };

    $scope.msg = '';

    $scope.signup = function(){
        if(!$scope.isEmpty($scope.reg.user) &&
            !$scope.isEmpty($scope.reg.name) &&
            !$scope.isEmpty($scope.reg.lastname) &&
            !$scope.isEmpty($scope.reg.password)){
            Session.createSession({
                user: $scope.reg.user,
                name: $scope.reg.name,
                lastname:  $scope.reg.lastname,
                password: $scope.reg.password
            });
            $scope.msg = 'Usuario creado!';
        }
        else{
            $scope.msg = '';
        }
    };

    $scope.isEmpty = function(string){
        return string === '';
    };
}
