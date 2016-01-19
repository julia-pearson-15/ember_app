import Ember from 'ember';

  var hamsters = [{
    name: 'Reginald',
    color: 'Orange',
    size: 'Average',
    fluff: 4
  },{
    name: 'Jodie',
    color: 'White',
    size: 'Petite',
    fluff: 7
  },{
    name: 'Benni-furrrrrr',
    color: 'Black',
    size: 'Chubby',
    fluff: 10
  }]

  var $button = $('button')

  $button.on('click',function(){
    event.preventDefault();
    var name = $('input').eq(0).val()
    var color = $('input').eq(1).val()
    var size = $('select').val()
    var fluffNum = $('input').eq(2).val()
    if (!!name.length && !!color.length && !!fluffNum.length){
      var newHamster = {
        name: name,
        color: color,
        size: size,
        fluff: fluffNum
      }
      hamsters.push(newHamster)
      console.log(hamsters)
    }
  })

export default Ember.Route.extend({
  model() {
    return hamsters;
  },
});