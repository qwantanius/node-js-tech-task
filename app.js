const userMock = {
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
};



const user = require('./src/user');
user.del("60fb857d5c545418381988e0");


