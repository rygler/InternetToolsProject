import Ember from 'ember';

export default Ember.Controller.extend({
  lat: 40.724424,
  lng: -73.815267,
  zoom: 15,
  landerLocation: [40.724424, -73.815267],

  actions: {
    updateCenter(e) {
      let center = e.target.getCenter();
      this.set('lat', center.lat);
      this.set('lng', center.lng);
    }
  }
});
