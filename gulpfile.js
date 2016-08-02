var elixir = require('laravel-elixir');
var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix
  		// .copy('vendor/bower/jquery/dist/jquery.min.js', 'resources/assets/js/vendor/jquery.js')
        // .copy('vendor/bower/angular/angular.min.js', 'resources/assets/js/vendor/angular.js')

        .less('app.less', 'public/css/blog.css')

        .scripts([
            // Vendor JS
            'vendor/jquery.js',
            'uikit/uikit.min.js',
            'uikit/components/sticky.min.js',
            'vendor/angular.js',
            'vendor/angular-route.min.js',
            'vendor/angular-sanitize.min.js',
            'vendor/loading-bar.js',
            'vendor/moment.min.js',
            'vendor/angular-moment.min.js',

            // Blog application's JS
            'app.js',
            'controllers/HomeController.js',
            'controllers/PostsController.js',
            'controllers/SinglePostController.js',
            'controllers/CategoryController.js',
            'controllers/TagController.js',
            'controllers/404Controller.js',
            'services/blog.js',
            'services/wp.js',
            'services/constants.js',
            // 'filters/blog.js',
        ], 'public/js/blog.js')

        // .version(['css/blog.css', 'js/blog.js'])
});