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
		getPost: function(postID) {
			return $http.get(api + 'posts/' + postID);
		},
		getCategoriesAndTags: function() {
			return $http.get(api + 'cattags');
		},
		getPostsByCategory: function(categoryName) {
			return $http.get(api + 'category/' + categoryName);
		},
		getPostsByTag: function(tagName) {
			return $http.get(api + 'tag/' + tagName);
		}
	};
}]);