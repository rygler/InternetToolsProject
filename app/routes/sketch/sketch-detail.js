import Ember from 'ember';

export default Ember.Route.extend({
  model(sketch) {
    return Ember.$.getJSON('../sketches.json').then(function(response) {
      return response.sketches[sketch.sketch_id];
    });
  }
});
