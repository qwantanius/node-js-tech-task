const user = require('./user');
const mongoclient = require('./mongoDBclient').mongoclient;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const { MongoClient } = require("mongodb");
client = new MongoClient("mongodb://127.0.0.1:27017");

app.post('/del', (req, res) => {
  user.del(req.body.id);
  res.sendStatus(200);
});



app.listen(8080, () => console.log(`Server running at http://localhost:8080`));

