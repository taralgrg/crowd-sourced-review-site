import Ember from 'ember';

export function listingPopularity(params) {
  var listing = params[0];

  if(listing.get('reviews').get('length') >= 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(listingPopularity);
