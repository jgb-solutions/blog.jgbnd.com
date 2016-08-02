blogApp
.factory('blog', ['$rootScope', 'wp', 'CONST', function($rootScope, wp, CONST) {
	$rootScope.blog = {};

	return {
		setTitle: function(newTitle, showTitle) {
			$rootScope.blog.title = newTitle + ' - JGB! Neat Design';
			$rootScope.blog.h1 = newTitle;
			$rootScope.blog.showTitle = showTitle;
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
			// if ( CONST.env !== 'local') {
			// 	apiURL.replace('http', 'https');
			// }

			return apiURL.replace('/api', '').replace('?page=', '/');
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
		},

		populateSEO: function(post) {
			$rootScope.blog.post = post;
		}
	}
}]);