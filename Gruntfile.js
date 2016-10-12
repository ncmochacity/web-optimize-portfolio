
var IMG_PATH = "views/images";
var IMG_COMPRESSED_PATH = "views/img_compressed";
module.exports = function(grunt) {
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1600,
            suffix: '_large_2x',
            quality: 30
          },{
            width:600,
            suffix: '_small',
            quality:30
          },{
            width:100,
            suffix: '_extremesmall',
            quality:30
          },{
            width:70,
            suffix: '-thumbnail',
            quality:60
          }]
        },
        files: [{
          expand: true,
          src: [ '*.{gif,jpg,png}'],
	        cwd: IMG_PATH,
          dest: IMG_COMPRESSED_PATH
        }]
      }
    },
    /* Clear out the images directory if it exists */
    clean: {
      dev: {
	    src: [ IMG_COMPRESSED_PATH ]
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
      options: {
	    create: [ IMG_COMPRESSED_PATH ]
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['mkdir', 'clean', 'responsive_images']);
};
