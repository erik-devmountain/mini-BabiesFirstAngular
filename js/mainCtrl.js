var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {
  $scope.friends = ['Stephen', 'Scott', 'Brian', 'Chuck', 'Neal', 'Max'];

  $scope.addFriend = function() {
    $scope.friends.push($scope.newFriend);
    $scope.newFriend = "";

    // $scope.showFriends = false;

    // $scope.toggleFriends = function() {
    //   $scope.showFriends = !$scope.showFriends
    // }
  }
});

app.controller