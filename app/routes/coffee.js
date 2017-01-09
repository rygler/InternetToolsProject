import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      coffee: this.store.createRecord('coffee')
    });
  },
  coffee: Ember.computed.alias('controller.model.coffee'),
  actions: {
    willTransition() {
      var coffee = this.get('controller.model.coffe');
      coffee.deleteRecord();
    },
    create() {
      var order = this.get('coffee.name');
      order += ', ' + this.get('coffee.email');
      this.send('flash', {alertType: "success", message: "Yay, new order: " + order});
    }
  }

});
