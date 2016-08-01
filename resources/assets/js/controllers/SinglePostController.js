blogApp
.controller('SinglePostController', ['$scope', '$routeParams', 'wp', 'blog', '$location', '$window',
	function($scope, $routeParams, wp, blog, $location, $window) {
		$scope.href = encodeURIComponent($window.location.href);

		wp.getPost($routeParams.name)
			.then(function( response ) {
				$scope.title = (response.data.title);
				blog.setTitle($scope.title, true);
				$scope.post = response.data;
			}, function( error ) {
				// on error
				console.log(error);
				$location.url('404');
			});
}]);