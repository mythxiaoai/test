module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt); 
    grunt.initConfig({
//    copy: {
//          html: {
//              files: [{
//                  expand: true,
//                  src: '**/*',
//                  dest: 'dist/'
//              }]
//          }
//      },
        "babel": {
            options: {
                sourceMap: false,
                presets: ['es2015']
            },
            dist: {
                files: {
                    "dist/rjtx.js": "rjtx.js"
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-babel')
    // 加载任务插件。
    //grunt.loadNpmTasks('grunt-contrib-copy')
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //自动执行的插件
   //grunt.registerTask('default', ['copy']);
    grunt.registerTask("default", ["babel"]);
};
