module.exports = function() {
  const faker = require('faker');
  const _ = require('lodash');
  return {
    people: _.times(100, function(n){
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar()
      }
    })
  }
}

// run json-server generate.js
// data is returned via Postman
// To query via Postman for individual person..EX:
// GET localhost:3000/people/?q=Randy
