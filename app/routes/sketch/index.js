import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON('../sketches.json').then(function(response) {
      return response;
    });
  }
});
