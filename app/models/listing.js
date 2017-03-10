import DS from 'ember-data';

export default DS.Model.extend({
  listing: DS.attr(),
  location: DS.attr(),
  duration: DS.attr(),
  price: DS.attr(),
  image: DS.attr()
});
