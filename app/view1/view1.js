'use strict';
/* jshint browser: true */

angular.module('myApp.view1', ['ngRoute','ngAnimate','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
        $scope.names = ["resnet18", "resnet34","resnet50","resnet101", "resnet152","squeezenet","vgg11","vgg13","vgg16"];
        $scope.tf = ["True","False"];
        $scope.filter = {
          fields:[
              {id:1,name:"Finetuning",selectable:true}
          ]
        };
        $scope.fil = true;

        $scope.add = function() {
        var f = document.getElementById('file').files[0],
            r = new FileReader();

        r.onloadend = function(e) {
            var data = e.target.result;
            //send your binary data via $http or $resource or do anything else with it
        };

        r.readAsBinaryString(f);
        };

}]);

// var button1 = window.document.getElementById("button1");
