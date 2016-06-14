'use strict';

angular.module('app')
    .controller('MainController', MainController);

/** @ngInject */
function MainController($scope,$state,Session) {

    $scope.uiRouterState = $state;
    $scope.admin = false;

    $scope.images = [
        {
            src: "app/components/carousel/images/higgidy_1.jpg",
            alt: "image 1",
            link: "http://www.higgidy.co.uk"
        },
        {
            src: "app/components/carousel/images/higgidy_2.jpg",
            alt: "image 2",
            link: "http://www.higgidy.co.uk"
        },
        {
            src: "app/components/carousel/images/higgidy_1.jpg",
            alt: "image 3",
            link: "http://www.higgidy.co.uk"
        },
        {
            src: "app/components/carousel/images/higgidy_3.jpg",
            alt: "image 3",
            link: "http://www.higgidy.co.uk"
        }
    ];

    $scope.init = function(){
        if(Session.get('admin')){
           $scope.adminOn();
           $state.go('admin-dashboard');
        }
        else{
           $scope.adminOff();
           $state.go('home');
        }
    };

    $scope.goSignout = function(){
        $state.go('home');
        $scope.adminOff();
        Session.set('admin',false);
    };

    $scope.adminOn = function(){
        $scope.admin = true;
    };

    $scope.adminOff = function(){
        $scope.admin = false;
    };

    $scope.init();

}
