blogApp
.factory('CONST', function() {
	return {
		api: '/api/',
		MEDIA_URL: $('meta[name=MEDIA_URL]').attr("content")
	}
});