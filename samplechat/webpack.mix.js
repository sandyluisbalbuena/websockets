let mix = require('node-modules/laravel-mix');

mix.js('src/app.js', 'dist').setPublicPath('dist');

mix.options({
	hmrOptions:{
		host:'localhost',
		port:8080
	}
})