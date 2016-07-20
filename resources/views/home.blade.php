<!DOCTYPE html>
<html lang="en" ng-app="blogApp">
<base href="/">
<head>
    <meta charset="utf-8">
	<title ng-bind="blog.title"></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon-precomposed" href="images/apple-touch-icon.png">
	<link rel="stylesheet" type="text/css" href="css/blog.css">
    <script src="js/blog.js"></script>
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