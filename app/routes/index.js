import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        photoUrl: 'assets/images/otter1.jpg',
        alt: 'Barry the Otter',
        divClass: 'item active',
        caption: 'Stayin\' Alive'
      },
      {
        photoUrl: 'assets/images/otter2.jpg',
        alt: 'Robin the Otter',
        divClass: 'item',
        caption: 'How Deep Is Your Love'
      },
      {
        photoUrl: 'assets/images/otter3.jpg',
        alt: 'Maurice the Otter',
        divClass: 'item',
        caption: 'You Should Be Dancing'
      },
      {
        photoUrl: 'assets/images/otter4.jpg',
        alt: 'Lesley the Otter',
        divClass: 'item',
        caption: 'Night Fever'
      },
      {
        photoUrl: 'assets/images/otter5.jpg',
        alt: 'Barbara the Otter',
        divClass: 'item',
        caption: 'To Love Somebody'
      }
    ];
  }
});
