export default function() {

  this.get('/', function() {
    return {
      data: [{
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
    }
  });
}