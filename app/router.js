import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('mars-weather', function() {
    this.route('detail');
  });
  this.route('sorting');
  this.route('coffee');
  this.route('stuff');
  this.route('map');
  this.route('board');
});

export default Router;
