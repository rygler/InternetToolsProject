import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      linkedInUrl: 'https://www.linkedin.com/in/raphaelgal',
      githubUrl: 'https://github.com/rygler/InternetToolsProject'
    };
  },
  actions: {
    flash(data) {
      this.controller.set('alertMessage', data.message);
      this.controller.set('alertType', data.alertType);
      this.controller.set('isAlertShowing', true);
    }
  }
});
