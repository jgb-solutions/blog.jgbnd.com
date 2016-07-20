<nav class="uk-navbar">
  	<a class="uk-navbar-brand uk-hidden-small" href="/">
  		<img src="images/{{ config('blog.logoSJPG') }}" title="@{{ blog.name }}" class="logo">
  	</a>
  	<div class="uk-navbar-flip">
  	 	<ul class="uk-navbar-nav uk-hidden-small">
      	@include('partials.menus.nav-lists')
 		</ul>
 	</div>

  	<a href="#offcanvas" class="uk-navbar-toggle uk-visible-small" data-uk-offcanvas></a>
  	<div class="uk-navbar-brand uk-navbar-center uk-visible-small">
      	<a href="/">
  		  	<img src="images/{{ config('blog.logoSJPG') }}" title="{{ config('blog.name') }}" class="logo">
      	</a>
  	</div>
</nav>