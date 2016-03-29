import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  photo: DS.attr(),
  headline: DS.attr(),
  author: DS.attr()
});
