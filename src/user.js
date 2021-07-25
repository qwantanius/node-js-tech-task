const mongoclient =  require('./mongoDBclient').mongoclient;
const { ObjectId } = require('mongodb');

module.exports = {

  create: function(user){
    (async function run(user){
      try{
        await mongoclient.db("ufo")
          .collection("users")
          .insertOne(user);
          mongoclient.close();
      } catch(e){
        console.log(e);
      }
    })(user).catch(console.dir);
    return this;
  },


  del: function(id){
    (async function run(id){
      try{
        await mongoclient.db("ufo")
          .collection("users")
          .deleteOne({_id: new ObjectId(id)});
          mongoclient.close();
      } catch(e){
        console.log(e);
      }
    })(id).catch(console.dir);
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

