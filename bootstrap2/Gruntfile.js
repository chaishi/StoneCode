module.exports = function(grunt){
  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
    clean: {
      src: ['css/', 'js/']
    },
    concat: {
      concat_js: {
      	files: [
          {'js/index.js': ['src/test1.js', 'src/test2.js']}
      	]
      }
    },
    less: {
      cssLess: {
      	files: [{
      	  expand: true,
		  cwd: "less/", //源文件基本路径
		  src: ["**/*.less", "!**/_*.less"], //需要编译的源文件
		  dest: "css/", //编译后的文件存放路径
		  ext: ".css" //编译后的文件后缀名
      	}]
      }
    },
    uglify: {
      dist: {
      	files: [{
          expand: true,
          cwd: 'js/',
          src: ['**/*.js', '!**/*.min.js'],
          dest: 'js/',
          ext: '.min.js'
      	}]
      }
    },
    cssmin: {
    	dist: {
      	files: [{
          expand: true,
          cwd: 'css/',
          src: ['**/*.css', '!**/*.min.js'],
          dest: 'css/',
          ext: '.min.js'
      	}]
      }
    },
    imagemin: {
	  dist: {
	    options: {
          optimizationLevel: 3
	    },
	    files: [{
	      expand: true,
	      cwd: 'imgSrc/',
          src: ['**/*.jpg', '**/*.gif', '**/*.png', '**/*.jpeg'],
          dest: 'img/'
	    }]
	  }
    },
    watch: {
      less: {
        files: 'less/**/*.less',
        tasks: ['default']
      },
      js: {
        files: 'src/**/*.js',
        tasks: ['default']
      },
      image: {
      	files: 'imgSrc/**/*',
      	tasks: ['default']
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  //开发时，默认任务
  grunt.registerTask('default', ['clean', 'concat', 'imagemin', 'less']);
  //代码发布时，压缩任务
  grunt.registerTask('ug', ['uglify', 'cssmin']);
};