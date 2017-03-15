import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  rating: DS.attr("number"),
  content: DS.attr(),
  listing: DS.belongsTo('listing', { async: true })
});
