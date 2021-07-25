const user = require('./src/user');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();




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






app.delete('/del/:id', (req, res) => {
  const id = req.params.id;
  user.del(id);
  res.json("OK");
 })

app.listen(8080);


