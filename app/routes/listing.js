import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
     return Ember.RSVP.hash ({
       listing: this.store.findRecord('listing', params.listing_id)
     })
  },
  actions: {
       saveReview(params) {
           var newReview = this.store.createRecord('review', params);
           var listing = params.listing;
           listing.get('reviews').addObject(newReview);
           newReview.save().then(function() {
             return listing.save();
           });
           this.transitionTo('listing');
         },
         destroyReview(review) {
      review.destroyRecord();
      this.transitionTo('listing', listing);
    },
    saveListing3(params) {
      var newListing = this.store.createRecord('listing', params);
      newListing.save();
      this.transitionTo('index');
    }
  }

});
