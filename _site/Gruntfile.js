module.exports = function (grunt) {
    grunt.initConfig({
        cssmin: {
            sitecss: {
                files: {
                    'wwwroot/assets/css/styles-bundle.min.css': [
                        'bower_components/materialize/dist/css/materialize.css',
                        'bower_components/animate.css/animate.css',
                        'bower_components/ngImgCrop/compile/unminified/ng-img-crop.css',
                        'custom_components/styles.css'
                    ]
                }
            }
        },
        uglify: {
            options: {
                compress: true
            },
            applib: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/angular/angular.js',
                    'bower_components/ngImgCrop/compile/unminified/ng-img-crop.js',
                    'bower_components/materialize/dist/js/materialize.js'
                ],
                dest: 'wwwroot/assets/libs/scripts-bundle.min.js'
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
};