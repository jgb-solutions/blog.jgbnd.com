blogApp
.controller('HomeController', ['$scope', 'wp', 'blog',
	function($scope, wp, blog) {
		$scope.title = 'Web & Mobile Development Blog';

		blog.setTitle($scope.title);

		wp.init()
			.then(function( response, status ) {
				// on success
				// console.log(response);
				$scope.posts = response.data;
			}, function( error ) {
				// on error
				console.log( error );
			});
}]);