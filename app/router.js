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
  this.route('sketch', function() {
    this.route('sketch-detail', {path: '/sketch-detail/:sketch_id'});
  });
});

export default Router;
