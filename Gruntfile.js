module.exports = function(grunt) {

 // Project configuration.
 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   sass: {
       dist: {
         files: {
           'css/style.css': 'css/style.scss'
         }
       }
     },
     watch: {
     	css: {
         files: ['css/*.scss'],
         tasks: ['sass']	
     	}
       },
    cssmin: {
        minify: {
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }
      }



 });

 grunt.loadNpmTasks('grunt-contrib-sass');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-contrib-cssmin');
 grunt.loadNpmTasks('grunt-uncss');

 // Default task(s).
 grunt.registerTask('default',['watch']);
 grunt.registerTask('production',['cssmin']);
};