<!DOCTYPE html>
<html lang="en" ng-app="blogApp">
<base href="/">
<head>
    <meta charset="utf-8">
	<title ng-bind-html="blog.title"></title>
    	<meta name="viewport" content="width=device-width, initial-scale=1">
   	<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
   	<meta name="env" content="{{ env('APP_ENV') }}">
	<link rel="stylesheet" type="text/css" href="css/blog.css">
	<script src="js/blog.js"></script>

	{{-- seo --}}
	<!-- Twitter Graph -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@jgbneatdesign" />
	<meta name="twitter:creator" content="@jgbneatdesign" />
	<!-- /Twitter Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="{{ config('blog.name') }}" />

	<link rel="canonical" href="{{ env('BLOG_URL') }}" />
	<meta name="description" content="{{ config('blog.description') }}"/>

	<!-- Open Graph -->
	<meta property="og:title" content="@{{ blog.post.title }}" />
	<meta property="og:description" content="@{{ blog.post.excerpt }}" />
	<meta property="og:image" content="@{{ blog.post.image }}" />
	<!-- / Open Graph -->
	{{-- /seo --}}

</head>
<body>
	<header class="navbar" 	data-uk-sticky="{}">
		<div class="uk-container uk-container-center">
 			@include('partials.menus.navs')
 		</div>
	</header>
	<div class="uk-block">
		<div class="uk-container uk-container-center">
        	<div class="uk-width-medium-3-4 uk-container-center">
        		<div ng-show="! blog.showTitle">
	        		<h1 class="uk-text-center" ng-bind-html="blog.h1"></h1>
	        		<hr class="uk-article-divider">
        		</div>
	            <div class="uk-grid">
	                <div class="uk-width-medium-3-4 uk-container-center">
						<ng-view autoscroll>
							<p class="uk-text-center">
								<i class="uk-icon-spinner uk-icon-spin uk-icon-large"></i> <br>
								Loading posts....
							</p>
						</ng-view>
	                </div>

	                @include('partials.sidebar')

	            </div>
	        </div>
		</div>
	</div>

	@include('partials.footer')

	@include('partials.menus.off-canvas')
</body>
</html>