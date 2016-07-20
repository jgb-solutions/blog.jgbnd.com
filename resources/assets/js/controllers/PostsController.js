blogApp
.controller('PostsController', ['$scope', 'wp', 'blog', function($scope, wp, blog) {
	$scope.title = ('All the posts');

	blog.setTitle($scope.title);

	wp.getPosts()
		.then(function( response ) {
			// on success
			console.log(response);
			$scope.posts = response.data.data;
		}, function( error ) {
			// on error
			console.log( error );
		});
}]);