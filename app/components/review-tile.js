import Ember from 'ember';

export default Ember.Component.extend({

  heading: Ember.computed('review.rating','review.author', function() {
  //  return this.get('review.author') + ' - ' + this.get('review.rating');

return "Rated " +this.get('review.rating')+ "/10"  + " by " + this.get('review.author');
  //  'rating' + return this.get('review.rating') + this.get('review.author');


 }),
  actions: {
    delete(review) {
      if (confirm('Are you sure you want to delete this review?')) {
        this.sendAction('destroyReview', review);
      }
    }
  }
});
