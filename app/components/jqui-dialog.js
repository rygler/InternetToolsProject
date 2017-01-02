import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function () {
    $('#about').button();
    $('#about').click(function () {
      $('#dialog-div').dialog({ modal: true});
    })
  }
});
