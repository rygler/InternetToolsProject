import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    willTransition() {
      var coffee = this.get('controller.model.coffe');
      coffee.deleteRecord();
    },
    create() {
      this.send('flash', {alertType: "success", message: "Yay, new order! "});
    }
  }
});
