const config = {
  mongo: {
    url : {
      local:"mongodb://127.0.0.1:27017",
    },
    client: null,
    collections:{
      users:"users",
    },
  },
  required: {
    schemas: {
      user: {
        fields:[ "firstname","lastname","email","phonenumber","location","socialmedia"],
      },
    },
  },
};

const users =  {
    $jsonSchema: {
      bsonType: "object",
        required: config.required.schemas.user.fields,
        properties: {
          firstname: {
            bsonType: "string",
            description: "must be a string and is required"
          },
          lastname: {
            bsonType: "string",
            description: "must be a string and is required"
          },
          email: {
            bsonType: "string",
            description: "must be a string and is required"
          },
          phonenumber: {
            bsonType: "string",
            description: "must be a string and is required"
          },
          location: {
            bsonType: "object",
            required: [ "city" ],
            properties: {
              address: {
                bsonType: "string",
                description: "must be a string if the field exists",
              },
              city: {
                bsonType: "string",
                description: "must be a string and is required",
              }
            }
          },
          socialmedia: {
            bsonType: "object",
            //required: [ "city" ],
            properties: {
              facebook: {
                bsonType: "string",
                description: "must be a string if the field exists",
              },
              instagram: {
                bsonType: "string",
                description: "must be a string and is required",
              },
              linkedin: {
                bsonType: "string",
                description: "must be a string if the field exists",
              },
              twitter: {
                bsonType: "string",
                description: "must be a string and is required",
              },
            }
          }
        }
      }
    }






const mongoclient = (function (config){
  const { MongoClient } = require("mongodb");
  client = new MongoClient(config.mongo.url.local);
  async function run() {
    try {
      await client.connect();
      await client.db("ufo").createCollection("students", {validator: users});
    } catch(e){
      console.log(e);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
  return config.mongo.client;
})(config);


