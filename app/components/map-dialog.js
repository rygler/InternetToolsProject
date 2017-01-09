import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function () {
    $('#map').button();
    $('#map').click(function () {
      $('#map-div').dialog({ modal: true});
    });
  }
});
