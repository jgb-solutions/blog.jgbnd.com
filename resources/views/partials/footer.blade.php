<section id="footer" class="uk-block uk-block-secondary uk-contrast">
	<div class="uk-container uk-container-center uk-text-center">
	  	<p>
	      	<a target="_blank" href="{{ config('blog.facebook') }}"
	      		class="uk-icon-hover uk-icon-medium uk-icon-facebook"
	      		title="Let's connect on Facebook"></a>
	      		&nbsp;
	      	<a target="_blank" href="{{ config('blog.twitter') }}"
	      		class="uk-icon-hover uk-icon-medium uk-icon-twitter"
	      		title="Follow us on Twitter. You might get a follow back"></a>
	      		&nbsp;
	      	<a target="_blank" href="{{ config('blog.github') }}"
	      		class="uk-icon-hover uk-icon-medium uk-icon-github"
	      		title="Wanna see some code we've written? Go read some on Github"></a>
	      		&nbsp;
				<a target="_blank" href="{{ config('blog.linkedin') }}"
	      		class="uk-icon-hover uk-icon-medium uk-icon-linkedin"
	      		title="Let's connect on LinkedIn"></a>
	  	</p>
	  	<p>{{ config('blog.name') }} &copy; {{ date('Y') }}</p>
	   <p><img src="images/{{ config('blog.logo') }}"></p>
	   <p>&lt; coded /&gt; with <i class="uk-icon-hover uk-icon-heart uk-text-danger"></i> in Delmas <img style="height:18px" src="/images/haiti.jpg"></p>
	</div>
</section>