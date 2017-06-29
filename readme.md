Generate Mock JSON data with JSON-server, faker.js and lodash

https://egghead.io/lessons/nodejs-creating-demo-apis-with-json-server


npm install -g json-server

json-server db.json

npm install faker lodash

Get request in Postman:

localhost:3000/people
localhost:3000/locations

-if json-server is closed will lose data that is in memory, BUT if run 's' in console before closing server, a snapshot will be created

run 'json-server generate.js'
