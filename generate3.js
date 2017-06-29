module.exports = function() {
  const faker = require('faker');
  const _ = require('lodash');

  let randomRating = Math.floor(Math.random() * 5) + 1;
  return {
    locations: _.times(100, function(n){
      return {

        name: faker.name.findName(),
        address: [faker.address.streetAddress(), faker.address.city(), faker.address.zipCode()],
        rating: Math.floor(Math.random() * 5) + 1,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: Math.floor(Math.random() * 250) + 1 + 'mi'
      }
    })
  }
}
