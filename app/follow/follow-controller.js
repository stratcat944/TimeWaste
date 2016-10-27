(function(){
	angular.module('TimeWaste')
	.controller('FollowController', ['$scope', '$http', function($scope, $http){
		$scope.user = JSON.parse(localStorage['User-Data']);
		console.log($scope.user);
		$http.get('api/users/get').then(function(response){
			$scope.users = response.data;
			console.log($scope.users);
		})
		$scope.follow = function(userId, wasterId){
			request = {userId: userId, wasterId: wasterId};
			$http.post('api/users/follow', request).then(function(){
				console.log("Following ", wasterId);
			})
		}
	}]);
}());
