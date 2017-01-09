/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  var bootstrapPath = 'bower_components/bootstrap-sass/assets/'

  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        bootstrapPath + 'stylesheets'
      ]
    },
    babel: {
      optional: ['es7.decorators']
    },
    'ember-cli-jquery-ui': {
      'theme': 'overcast'
    },
    fingerprint: {
      exclude: [
        'images/layers-2x.png',
        'images/layers.png',
        'images/marker-icon-2x.png',
        'images/marker-icon.png',
        'images/marker-shadow.png'
      ]
    }
  });

  // Create paths to bootstrap assets
  // Add assets to app with import
  app.import(bootstrapPath + 'javascripts/bootstrap.js');
  app.import(bootstrapPath + 'fonts/bootstrap/glyphicons-halflings-regular.woff', {
    destDir: 'fonts/bootstrap'
  });
  app.import(bootstrapPath + 'fonts/bootstrap/glyphicons-halflings-regular.ttf', {
    destDir: 'fonts/bootstrap'
  });
  app.import(bootstrapPath + 'fonts/bootstrap/glyphicons-halflings-regular.woff2', {
    destDir: 'fonts/bootstrap'
  });
  app.import(bootstrapPath + 'fonts/bootstrap/glyphicons-halflings-regular.woff', {
    destDir: 'fonts/bootstrap'
  });
  app.import(bootstrapPath + 'fonts/bootstrap/glyphicons-halflings-regular.eot', {
    destDir: 'fonts/bootstrap'
  });
  app.import('bower_components/unslider/dist/js/unslider-min.js');
  app.import('bower_components/unslider/dist/css/unslider.css');
  app.import('bower_components/p5.js/lib/p5.js');
  app.import('bower_components/gameoflife/dist/gameoflife.min.js');

  return app.toTree();
};
