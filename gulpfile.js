const elixir = require('laravel-elixir');

Elixir.config.assetsPath = 'src';

Elixir.config.publicPath = 'dist';

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

elixir(mix => {
    mix
	    .less(['index.less'], 'dist/reset.css');
});