'use strict';

/* Controllers */

function UserList($scope, socket, $http, $location) {
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

	$scope.editUser = function() {
		$location.url('/users/'+$scope.selected.uid);
	}
}

function EditUser($scope, $routeParams, $http, $location) {
	$scope.form = {};
  $http.get('/api/user/' + $routeParams.uid).
  	success(function(data) {
  		$scope.form = data.user;
  		console.log($scope.form)
  	});

  $scope.submit = function() {
  	console.log($scope.form)
  	$http.put('/api/user/' + $routeParams.uid, $scope.form).
  		success(function(data){
  			$location.url('/users');
  		});
  }

  $scope.back = function() {
  	$location.url('/users');
  }
}

