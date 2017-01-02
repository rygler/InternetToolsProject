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
    'ember-cli-jquery-ui': {
      'theme': 'overcast'
    }
  });

  // Create paths to bootstrap assets
  // Add assets to app with import
  app.import(bootstrapPath + 'javascripts/bootstrap.js');
  app.import('bower_components/unslider/dist/js/unslider-min.js');
  app.import('bower_components/unslider/dist/css/unslider.css');

  return app.toTree();
};
