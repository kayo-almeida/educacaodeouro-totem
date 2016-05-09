module.exports = function( grunt ) {

    grunt.initConfig({
        concat: {
            basic: {
                src: ['src/js/**/*'],
                dest: 'dist/js/main.js',
            }
        }, //concat

        bower_concat: {
            all: {
                dest: 'dist/js/bower.min.js'
            }
        }, // bower_concat

        uglify : {
            options : {
                sourceMap: true,
                mangle : false
            },

            my_target : {
                files : {
                    'dist/js/main.min.js' : [ 'dist/js/main.js' ]
                }
            }
        }, // uglify

        clean: {
            js: ["dist/js/**/*.js", "!dist/js/**/*.min.js"]
        }, //clean

        watch: {
            scripts: {
                files: ['src/js/**/*'],
                tasks: ['concat', 'uglify', 'clean'],
                options: {
                    spawn: false,
                }
            }
        }

    });


    // Plugins do Grunt
    grunt.loadNpmTasks( 'grunt-contrib-concat' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-clean' );
    grunt.loadNpmTasks( 'grunt-bower-concat' );

    // Tarefas que serão executadas
    grunt.registerTask( 'default', [ 'bower_concat', 'concat', 'uglify' , 'clean'] );

    // Tarefa para Watch
    grunt.registerTask( 'w', [ 'watch'] );

};