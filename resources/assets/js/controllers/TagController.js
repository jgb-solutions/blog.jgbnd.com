blogApp
.controller('TagController', [
	'$scope', '$http', 'wp', 'blog', '$routeParams',
	function($scope, $http, wp, blog, $routeParams) {
		let page = $routeParams.page;
		$scope.title = ('All posts tagged: "' + $routeParams.tag + '"' + blog.getPagedTitle( page ));

		blog.setTitle($scope.title);

		wp.getPostsByTag( $routeParams.tag, page )
			.then(function( response ) {
				blog.setPostsAndPaginate(response, $scope);
			}, function( error ) {
				// on error
				console.log( error );
			});
	}
]);