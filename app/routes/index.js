import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {photoURL: 'assets/images/otter1.jpg'},
      {photoURL: 'assets/images/otter2.jpg'},
      {photoURL: 'assets/images/otter3.jpg'},
      {photoURL: 'assets/images/otter4.jpg'},
      {photoURL: 'assets/images/otter5.jpg'}
    ];
  }
});
