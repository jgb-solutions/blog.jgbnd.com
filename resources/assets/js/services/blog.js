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
		},

		getPagedTitle: function( page ) {
			// checking whether there's a page variable available
			// if it does we grab it, otherwise we set it to an empty string.
			let hasPage = '';
			// displaying the current pagination page we're in.
			if  ( page ) {
				if ( page == 1 ) {
					return '';
				}

				hasPage = ' (page ' + page + ')';
			}

			return hasPage;
		},

		hasPaged: function( page ) {
			return page !== undefined;
		},

		getRealAPIURL: function( apiURL ) {
			apiURL = apiURL.replace('/api', ''); // remove the API string
			apiURL = apiURL.replace('?page=', '/'); // remove the '?page=' string and add a '/'
			return apiURL;
		},

		paginate: function(response, $scope) {
			let nextPageUrl = response.data.next_page_url;
			let previousPageUrl = response.data.prev_page_url;

			$scope.nextPageUrl = nextPageUrl ? this.getRealAPIURL( nextPageUrl ) : '';
			$scope.previousPageUrl = previousPageUrl ? this.getRealAPIURL( previousPageUrl ) : '';
		},

		setPostsAndPaginate: function( response, $scope ) {
			$scope.posts = response.data.data;

			this.paginate(response, $scope);
		}
	}
}]);