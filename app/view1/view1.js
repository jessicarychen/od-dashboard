'use strict';
/* jshint browser: true */
angular.module('myApp.view1',['ngRoute'])


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
        $scope.model_names = ["resnet18", "resnet34","resnet50","resnet101", "resnet152","squeezenet","vgg11","vgg13","vgg16"];
        $scope.model_change = function(model_selected){
            // console.log(model_selected);
            $scope.model = model_selected;
        };
        $scope.tf = ["True","False"];
        $scope.ft_change = function(ft){
            // console.log(ft);
            $scope.tf = ft;
        };
        $scope.lr_change = function(lr){
            console.log(lr);
            $scope.lr = lr;
        };
        $scope.filter = {
          fields:[
              {id:1,name:"Finetuning",selectable:true}
          ]
        };

        $scope.fil = true;
        $scope.singleModel = 1;

        $scope.radioModel = 'Middle';

        $scope.add = function() {
        var f = document.getElementById('file').files[0],
            r = new FileReader();

        r.onloadend = function(e) {
            var data = e.target.result;
            //send your binary data via $http or $resource or do anything else with it
        };

        r.readAsBinaryString(f);
        };
        // $scope.makeRequest = function ($scope,$http) {
        //     var url = ""; //wherever the management node is
        //     var data = $.param({
        //         model: $scope.model,
        //         lName: $scope.lastName
        //     });
        //
        //     var config = "";
        //     $http.post(url,data,config){
        //
        //     }
        // }
}]);

// var button1 = window.document.getElementById("button1");
