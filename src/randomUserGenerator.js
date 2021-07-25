module.exports = {

 mock:{users:[]},

 generate: function (count){
  let res = [];
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
    res.push(ran);
  }
  return res;
 }
}


