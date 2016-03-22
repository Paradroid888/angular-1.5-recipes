var app = angular.module('todoApp', []);

app.controller('todoController', function(){
    this.todoItems = ['This is a test!', 'test2'];
    this.completedItems = [];
    this.newString = '';
    
    this.add = function(){
        this.todoItems.push(this.newString)
        this.newString = '';
    };
    
    this.completeItem = function(itemIndex){
        this.completedItems.push(this.todoItems[itemIndex]);
        this.todoItems.splice(itemIndex, 1);
    }
    
    this.undoComplete = function(itemIndex){
        this.todoItems.push(this.completedItems[itemIndex]);
        this.completedItems.splice(itemIndex, 1);
    }
    
    this.deleteTask = function(itemIndex){
        this.todoItems.splice(itemIndex, 1);
    }
})