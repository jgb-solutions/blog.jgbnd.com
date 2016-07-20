blogApp
.controller('404Controller', ['$scope', 'blog',
	function($scope, blog) {
		$scope.title = 'Post not found. Sorry!';

		blog.setTitle($scope.title);
}]);