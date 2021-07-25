module.exports = {

 random:{users:[]},

 generate: function (count){
  for(let userCounter=0; userCounter<=count; userCounter++){
    ran = {
      "firstname" : "MockFirstName",
      "lastname" : "MockLastName",
      "email" : "useremail@mock.com",
      "location" : {
         "city" : "MockCity",
         "address" : "MockAddress"
      },
      "socialmedia" : {
        "linkedin" : "MockLinkedIn",
        "instagram": "MockInsta"

      }
    }
    for(let index in ran){
      if(typeof ran[index] == "object"){
        for(let i in ran[index]){
          if(typeof i == "string"){
            ran[index][i] += String(userCounter);
          }
        }
      } else {
        ran[index] += String(userCounter);
      }
    }
    this.random.users.push(ran);
  }
  return this
 }

}


