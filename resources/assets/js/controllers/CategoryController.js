blogApp
.controller('CategoryController', [
	'$scope', 'wp', 'blog', '$routeParams', function($scope, wp, blog, $routeParams) {
	$scope.title = ('All posts in: ' + $routeParams.category);

	blog.setTitle($scope.title);

	wp.getPostsByCategory( $routeParams.category )
		.then(function( response ) {
			// on success
			console.log(response);
			$scope.posts = response.data.data;
		}, function( error ) {
			// on error
			console.log( error );
		});

	$scope.canPaginate = function() {
		return false;
	};
}]);