module.exports = function ( grunt ) {

	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),

		sass: {
			options: {
				style: 'compressed'
			},
			main: {
				src: 'src/styles/main.scss',
				dest: 'build/min.css'
			}
		}
	});

	grunt.loadNpmTasks( 'grunt-contrib-sass' );


	grunt.registerTask( 'default', [ 'sass' ]);


};