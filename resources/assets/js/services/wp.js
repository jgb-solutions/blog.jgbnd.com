blogApp
.factory('wp', ['$http', 'api', function($http, api){
	return {
		init: function() {
			// let page = page || null;
			return $http.get(api + 'init');
		},
		getPosts: function( page ) {
			// let page = page || null;
			return $http.get(api + 'posts?page=' + page);
		},
		getPost: function(postName) {
			return $http.get(api + 'post/' + postName);
		},
		getCategoriesAndTags: function() {
			return $http.get(api + 'cattags');
		},
		getPostsByCategory: function(categoryName, page) {
			return $http.get(api + 'category/' + categoryName  + '?page=' + page);
		},
		getPostsByTag: function(tagName, page) {
			return $http.get(api + 'tag/' + tagName + '?page=' + page);
		}
	};
}]);