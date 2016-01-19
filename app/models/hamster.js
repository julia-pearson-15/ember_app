import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  color: DS.attr(),
  size: DS.attr(),
  fluff: DS.attr()
});
