import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  size: DS.attr('string'),
  flavor: DS.attr('string'),
  quantity: DS.attr('number')
  // fullOrder: Ember.computed('name', 'email', 'size', 'flavor', function () {
  //   return 'Order: ' + this.get('name') + ', Email: ' + this.get('email') + ', Size: ' + this.get('size') + ', Flavor:' + this.get('flavor') + '.';
  // })
});
