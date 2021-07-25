const user = require('./src/user');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


//delete user
app.delete('/del/:id', (req, res) => {
  let id = req.params.id;
  id = id !== undefined ? id :
    res.json("ID cannot be empty");
  user.del(id);
  res.json("OK");
});


//get user
app.get('/get/:id', (req, res) => {
  let id = req.params.id;
  res.json(user.get(id));
});


//create user
app.use(bodyParser.json());
app.post('/create/', (req, res) => {
  user.create(req.body);
  res.json("OK");
});


app.listen(8080);



