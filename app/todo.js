var app = angular.module('todoApp', []);

app.controller('todoController', ['$scope', function($scope){
    $scope.todoItems = ['This is a test!', 'test2'];
    $scope.completedItems = [];
    
    $scope.add = function(){
        $scope.todoItems.push($scope.newString)
        $scope.newString = '';
    };
    
    $scope.completeItem = function(itemIndex){
        $scope.completedItems.push($scope.todoItems[itemIndex]);
        $scope.todoItems.splice(itemIndex, 1);
    }
    
    $scope.undoComplete = function(itemIndex){
        $scope.todoItems.push($scope.completedItems[itemIndex]);
        $scope.completedItems.splice(itemIndex, 1);
    }
    
    $scope.deleteTask = function(itemIndex){
        $scope.todoItems.splice(itemIndex, 1);
    }
}])