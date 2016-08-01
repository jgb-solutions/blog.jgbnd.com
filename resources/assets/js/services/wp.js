blogApp
.factory('wp', ['$http', 'CONST', function($http, CONST){
	return {
		init: function() {
			// let page = page || null;
			return $http.get(CONST.api + 'init');
		},
		getPosts: function( page ) {
			// let page = page || null;
			return $http.get(CONST.api + 'posts?page=' + page);
		},
		getPost: function(postName) {
			return $http.get(CONST.api + 'post/' + postName);
		},
		getCategoriesAndTags: function() {
			return $http.get(CONST.api + 'cattags');
		},
		getPostsByCategory: function(categoryName, page) {
			return $http.get(CONST.api + 'category/' + categoryName  + '?page=' + page);
		},
		getPostsByTag: function(tagName, page) {
			return $http.get(CONST.api + 'tag/' + tagName + '?page=' + page);
		}
	};
}]);