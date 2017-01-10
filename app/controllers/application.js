import Ember from 'ember';

export default Ember.Controller.extend({
  alertMessage: null,
  alertType: null,
  isAlertShowing: false,
  isShowingModal: false,
  actions: {
    removeAlert(){
      this.set('alertMessage', "");
      this.set('alertType', "success");
      this.set('isAlertShowing', false);
    },
    toggleModal: function () {
      this.toggleProperty('isShowingModal');
    }
  }
});
