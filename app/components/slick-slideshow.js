import Ember from 'ember';

export default Ember.Component.extend({
  // setup: function() {
  //   this.$('slideshow').slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 2000
  //   });
  // }.on('didInsertElement'),
  didInsertElement: function () {
    this.$('slideshow').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    });
  }
});
