blogApp
.controller('TagController', [
	'$scope', '$http', 'wp', 'blog', '$routeParams', function($scope, $http, wp, blog, $routeParams) {
	$scope.title = ('All posts tagged: ' + $routeParams.tag);

	blog.setTitle($scope.title);

	wp.getPostsByTag( $routeParams.tag )
		.then(function( response ) {
			// on success
			console.log(response);
			$scope.posts = response.data.data;
		}, function( error ) {
			// on error
			console.log( error );
		});
}]);