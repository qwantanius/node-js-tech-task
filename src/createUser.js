module.exports = {
	createUser: function(user){
		(async function run(user){
		  try{
		    const mongoclient = require('./mongoDBclient').mongoclient;
		    await mongoclient.db("ufo")
		          .collection("users")
		            .insertOne(user);
		    mongoclient.close();
		  } catch(e){
		    console.log(e);
		  }
		})(user).catch(console.dir);
	}
}

