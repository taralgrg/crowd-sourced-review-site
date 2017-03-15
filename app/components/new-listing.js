import Ember from 'ember';

export default Ember.Component.extend({
  addNewlisting: false,
  actions: {
    listingFormShow() {
      this.set('addNewlisting', true);
    },
    saveListing1() {
      var params = {
        location: this.get('location'),
        duration: this.get('duration'),
        price: this.get('price'),
        tour: this.get('tour'),
        image: this.get('image'),
      };
      this.set('addNewListing', false);
      this.sendAction('saveListing2', params);
    }
  }
});
