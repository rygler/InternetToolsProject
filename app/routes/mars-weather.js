import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      url: 'https://www.nasa.gov/sites/default/files/thumbnails/image/yir2014-maven.jpg',
      name: 'Mars'
    };
  }
});
