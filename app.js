const user = require('./src/user');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();



app.delete('/del/:id', (req, res) => {
  let id = req.params.id;
  id = id !== undefined ? id :
    res.json("ID cannot be empty");
  user.del(id);
  res.json("OK");
})

app.get('/get/:id', (req, res) => {
  let id = req.params.id;
  res.json(user.get(id));
})








app.listen(8080);



