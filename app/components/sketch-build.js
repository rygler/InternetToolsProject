import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    this._super(...arguments);
    console.log(this.get('sketch.sketchFile'));
    Ember.$.getScript(this.get("sketch.sketchFile"));
  },
  willDestroyElement() {
    this._super(...arguments);
    eval(this.get("sketch.sketchRemove"));
  },
});
