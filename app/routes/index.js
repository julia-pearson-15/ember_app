import Ember from 'ember';
  var $ = Ember.$;

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
  }];

  var $button = $('button');

  $button.on('click',function(){
    event.preventDefault();
    var name = $('input').eq(0).val();
    var color = $('input').eq(1).val();
    var size = $('select').val();
    var fluffNum = $('input').eq(2).val();
    if (!!name.length && !!color.length && !!fluffNum.length){
      var newHamster = {
        name: name,
        color: color,
        size: size,
        fluff: fluffNum
      };
      hamsters.push(newHamster);
      console.log(hamsters);
    }
  });

  var returnOfTheHamsters = [];
  returnOfTheHamsters = hamsters;
  // returnOfTheHamsters.sort(function(a, b) {
  //   return a.name.localeCompare(b.name)
  // });

  var $name = $('#name');
  var $color = $('#color');
  var $size = $('#size');
  var $fluff = $('#fluff');

  $name.on('click', function(){
    console.log('got to name sorting');
    returnOfTheHamsters.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });
  });
  $color.on('click',function(){
    console.log('got to color sorting');
    returnOfTheHamsters.sort(function(a, b) {
      return a.color.localeCompare(b.color);
    });
  });
  $size.on('click',function(){
    console.log('got to size sorting');
    returnOfTheHamsters.sort(function(a, b) {
      return a.size.localeCompare(b.size);
    });
  });
  $fluff.on('click',function(){
    console.log('got to fluff sorting');
    returnOfTheHamsters.sort(function(a, b) {
      return a.fluff.localeCompare(b.fluff);
    });
  });

export default Ember.Route.extend({
  model() {
    return returnOfTheHamsters;
  },
});