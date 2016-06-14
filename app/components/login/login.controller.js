'use strict';

angular.module('app')
    .controller('LoginController', LoginController);

/** @ngInject */
function LoginController($scope,$state,Session) {

    $scope.log = { user: '',password:''};
    $scope.msg = '';
    $scope.storage = {
      user: Session.get('user') ? Session.get('user').user:'',
      password: Session.get('user') ? Session.get('user').password:''
    };

    $scope.signin = function(){
        if(!$scope.isEmpty($scope.log.user) && !$scope.isEmpty($scope.log.password)){
            if($scope.log.user===$scope.storage.user){
                if($scope.log.password === $scope.storage.password){
                    $state.go('dashboard');
                }
                else{
                    $scope.msg = 'Contraseña incorrecta.';
                }
            }
            else{
                $scope.msg = 'El usuario no existe.';
            }
        }
        else{
            $scope.msg = '';
        }
    };

    $scope.isEmpty = function(string){
        return string === '';
    };
}
