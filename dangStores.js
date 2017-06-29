module.exports = function() {
  // loads only de locale
//var faker = require('faker/locale/de');
  const faker = require('faker');
  faker.locale = "en_US";
  const _ = require('lodash');

// let generateTags = function(){
//   get_randomTag = function (list) {
//     return list[Math.floor((Math.random()*list.length))];
//   };
//
//   let newTag = get_randomTag(['wifi','open-late','vega']);
//
//   get_randomTag2 = function (list) {
//     return list[Math.floor((Math.random()*list.length))];
//   };
//
//   let newTag2 = get_randomTag2(['family-friendly','dog-friendly','snacks']);
// }
//
  
  //let randomId = Math.floor(Math.random() * 100) + 1;
  return {
    locations: _.times(100, function(n){
      return {
        _id: faker.random.uuid(),
        slug: faker.lorem.slug(),
        name: faker.name.findName(),
        description: faker.lorem.sentence(),
        author: faker.name.firstName(),
        photo: faker.image.food(),
        tags: ['open-late', 'licensed', 'wifi'] ,
        address: [faker.address.streetAddress(), faker.address.city(), faker.address.zipCode()],
        rating: Math.floor(Math.random() * 5) + 1,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: Math.floor(Math.random() * 250) + 1 + 'mi'
      };
    })
  };
};
