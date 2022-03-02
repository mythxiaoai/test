module.exports = function(grunt) {

    grunt.initConfig({
		transport: {
	        target_name: {
	        	options: {
                    // 是否采用相对地址
                    relative: true,
                    // 生成具名函数的id的格式 默认值为 {{family}}/{{name}}/{{version}}/{{filename}}
                    format: '../js/user/{{filename}}' 
                },
	            files: [{
	                cwd: 'js/user',
	                src: ["**/*.js",'!**/*-debug.js'],
	                dest: 'js/dist/',
	                filter: function(filepath) {
	                	console.log(filepath)
				        return filepath;
				      }
	            }]
	        }
	    }
    });

    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.registerTask('default', ['transport']);
};