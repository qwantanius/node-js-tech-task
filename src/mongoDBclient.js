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


const mongoclient = (function (config){
  const { MongoClient } = require("mongodb");
  client = new MongoClient(config.mongo.url.local);
  async function run() {
    try {
      await client.connect();
    } catch(e){
      console.log(e);
    }
  }
  run().catch(console.dir);
  return client;
})(config);


module.exports ={ mongoclient: mongoclient, };


