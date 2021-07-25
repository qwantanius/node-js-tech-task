const mongoclient =  require('./mongoDBclient').mongoclient;
const { ObjectId } = require('mongodb');

module.exports = {

  create: function(mongoclient,user){
    (async function run(mongoclient,user){
      try{
        await mongoclient.db("ufo")
          .collection("users")
          .insertOne(user);
          mongoclient.close();
      } catch(e){
        console.log(e);
      }
    })(mongoclient,user).catch(console.dir);
    return this;
  },


  del: function(mongoclient,id){
    (async function run(mongoclient,id){
      try{
        const { MongoClient } = require("mongodb");
        const uri = "mongodb://127.0.0.1:27017";
        const mongoclient = new MongoClient(uri);
        await mongoclient.connect();
        await mongoclient.db("ufo")
          .collection("users")
          .deleteOne({_id: new ObjectId(id)});
          mongoclient.close();
      } catch(e){
        console.log(e);
      }
    })(mongoclient,id).catch(console.dir);
    return this;
  },

  get: function(id){
    console.log(id);
    return {
      "firstname":"MockUserFirstName",
      "lastname":"MockUserLastName",
      "email":"useremail@mock.com",
      "location":{
        "city":"MockCity",
        "address":"MockAddress"
      },
        "socialmedia":{
        "linkedin":"MockLinkedIn"
      },
    }
  },
}

