import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr(),
  duration: DS.attr(),
  price: DS.attr(),
  tour: DS.attr(),
  image: DS.attr(),
  reviews: DS.hasMany('review', { async: true })
});
