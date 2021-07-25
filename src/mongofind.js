const { MongoClient } = require("mongodb");
const { ObjectId } = require('mongodb');

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);



function getUserByID(id,cb){
  var result;
  async function find(id,cb) {
    try {
      await client.connect();
      const database = client.db("ufo");
      const users = database.collection("users");
      const query = { _id: new ObjectId(id)};
      const user = await users.findOne(query, {});
        cb(user);
    } finally {
      await client.close();
    }
  }
  find(id,cb).catch(console.dir);

}

module.exports = {
  find: getUserByID
}
