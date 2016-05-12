module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            js: {
                src: ['src/js/jquery-1.11.1.min.js', 'src/js/bootstrap.min.js', 'src/js/main.js'],
                dest: 'dist/js/scripts.js'
            },
            css: {
                src: 'src/css/*.css',
                dest: 'dist/css/stylesheets.css'
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/css/stylesheets.min.css': ['dist/css/stylesheets.css']
                }
            }
        },
        minified : {
            files: {
                src: ['dist/js/scripts.js'],
                dest: 'dist/js/'
            },
            options : {
                sourcemap: true,
                allinone: false
            }
        }
    });


    // Plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-minified');

    // Tarefas que serão executadas
    grunt.registerTask('default', ['concat', 'cssmin', 'minified']);
};