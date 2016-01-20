// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLERS
myApp.controller('mainController', ['$scope', function ($scope) {
    $scope.class = "";
    $scope.cards = '';
    $scope.lookup = function(){
        console.log("lookup is working");
        //if($scope.class == "") $scope.class = "Mage";
        $.ajax({

            url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/' + $scope.class,
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                console.log("Retrieving class cards");
                console.log(json);
                $scope.$apply(function(){
                    $scope.cards = json;
                });
                console.log("Set $scope.cards to json object");
                //cardObj = json[0];
                //console.dir(cardObj);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting class data!");
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "BLIg3ZuiagmshFGcwHr0b2cVzeU3p1COvUKjsnMxtdKo87Y28u"); // Enter here your Mashape key
            }
        });
};
}]);

