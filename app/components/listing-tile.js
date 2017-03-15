import Ember from 'ember';

export default Ember.Component.extend ({
favouriteRestaurant: Ember.inject.service(),

  actions: {
    addToFav() {
    this.get('favouriteRestaurant').add(this.get('listing'));
    }
  }
})
