'use strict';

angular.module('app')
    .controller('MainController', MainController);

/** @ngInject */
function MainController($scope,$state,Session) {

    $scope.uiRouterState = $state;
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

    $scope.goSignout = function(){
        $state.go('home');
    };

}
