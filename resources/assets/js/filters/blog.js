blogApp

.filter('image', ['CONST', 'blog', function(CONST, blog) {
	return function(post, size) {
		// console.log(( size));
		if (post.images) {
			return CONST.MEDIA_URL + blog.getImageSize(post, size);
		}

		return post.image;
	}
}]);