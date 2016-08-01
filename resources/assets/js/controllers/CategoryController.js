blogApp
.controller('CategoryController', [
	'$scope', 'wp', 'blog', '$routeParams',
	function($scope, wp, blog, $routeParams) {
		let page = $routeParams.page;
		$scope.title = ('All posts in the category: "' + $routeParams.category + '"' + blog.getPagedTitle( page ));

		blog.setTitle( $scope.title );

		wp.getPostsByCategory( $routeParams.category, page)
			.then(function( response ) {
				blog.setPostsAndPaginate(response, $scope);
			}, function( error ) {
				// on error
				console.log( error );
			});
}]);