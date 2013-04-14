'use strict';

/* Controllers */

function UserList($scope, socket, $http) {
	$http.get('/api/users').
	  success(function(data) {
			$scope.users = data.users;
			$scope.selected = data.users[0];
		});
	

	$scope.selectUser = function(user) {
		$('#' + $scope.selected.uid).removeClass('selected');
    $scope.selected = user;
    console.log($('#' + user.uid))
    $('#' + user.uid).addClass('selected');
	}
}

function EditUser($scope, $routeParams, $http) {
	console.log($routeParams.uid)
  $http.get('/api/user/' + $routeParams.uid).
  	success(function(data) {
  		$scope.user = data.user;
  		console.log(data)
  	});
}

