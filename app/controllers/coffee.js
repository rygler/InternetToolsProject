import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create() {
      this.send('flash', {alertType: "success", message: "Yay, new order! "});
    }
  }
});
