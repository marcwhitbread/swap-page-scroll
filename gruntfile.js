module.exports = function(grunt) {
	
    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
    	concat: {
	    	compile: {
		    	src: ['src/js/common.js', 'src/js/**/*.js'],
		    	dest: 'app/js/script.js'
	    	}
    	},
    	less: {
	    	compile: {
				files: {
					'app/css/style.css' : 'src/less/**/*.less'
				}
			}
		},
    	watch: {
	    	js: {
				files: ['src/js/**/*.js'],
				tasks: ['concat:compile']
			},
	    	less: {
		    	files: ['src/less/**/*.less'],
				tasks: ['less:compile']	
	    	}
    	}
    });
    
    //load tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    //register tasks
    grunt.registerTask('default', ['watch']);
    
}