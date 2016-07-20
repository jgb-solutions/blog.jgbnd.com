blogApp
.factory('blog', ['$rootScope', 'wp', function($rootScope, wp) {
	$rootScope.blog = {};

	return {
		setTitle: function(newTitle) {
			$rootScope.blog.title = newTitle + ' - JGB! Neat Design';
		},

		setCategoriesAndTags: function() {
			wp.getCategoriesAndTags().then(function(response) {
				console.log(response);
				$rootScope.blog.categories = response.data.categories;
				$rootScope.blog.tags = response.data.tags;
			}, function(error) {
				console.log(error);
			});
		}
	};
}]);