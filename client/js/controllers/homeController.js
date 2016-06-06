myApp.controller('homeController', ['$scope', function($scope){
    $scope.myInterval = 3000;
    $scope.slides = [{
        image: "img/1.jpg",
        link: "https://www.google.com/"
    },
    {
        image: "img/2.jpg",
        link: "https://www.youtube.com/"
    },
    {
        image: "img/3.jpg",
        link: "https://www.chase.com/"
    }];
}]);