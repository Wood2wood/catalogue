module.exports = function(grunt) {

	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'media/css/style.css': 'media/sass/style.scss'
				}
			}
		},
		watch: {
			sass: {
				files: ['media/sass/*.scss', 'media/sass/*/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true
				}
			},
			files: {
				files: 'index.php',
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['sass']);

}
