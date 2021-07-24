import hello from 'hello.js';
const config = {
  mongo: {
    url: {
      local: "mongodb://127.0.0.1:27017"
    },
    client: null,
    collections: {
      users: "users"
    }
  },
  required: {
    schemas: {
      user: {
        fields: ["firstname", "lastname", "email", "phonenumber", "location", "socialmedia"]
      }
    }
  }
};

const mongoclient = function (config) {
  const {
    MongoClient
  } = require("mongodb");

  client = new MongoClient(config.mongo.url.local);

  async function run() {
    try {
      await client.connect();
      await client.db("ufo").collection("users").insertOne({
        "firstname": "NIK",
        "lastname": "BORSH",
        "email": "nborshov8@gmail.com",
        "location": {
          "city": "city",
          "address": "address"
        },
        "socialmedia": {
          "linkedin": "nborshov"
        }
      });
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  }

  run().catch(console.dir);
  return config.mongo.client;
}(config);