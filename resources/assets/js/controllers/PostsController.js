blogApp
.controller('PostsController', [
	'$scope', 'wp', 'blog', '$routeParams',
	function($scope, wp, blog, $routeParams) {
		let page = $routeParams.page;

		$scope.title = ('All the posts' + blog.getPagedTitle( page ));

		blog.setTitle($scope.title);

		wp.getPosts( page )
			.then(function( response ) {
				blog.setPostsAndPaginate(response, $scope);
			}, function( error ) {
				// on error
				console.log( error );
			});
}]);