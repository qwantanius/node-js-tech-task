const user = require('./src/user');
const formatToPDF = require('./src/pdf');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs')
const pdf = require('html-pdf');
const mongofind = require('./src/mongofind');
const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";



//delete user
app.delete('/del/:id', (req, res) => {
  try{
    require('./src/mongoDBclient');
    const mongoclient = new MongoClient(uri);
    mongoclient.connect()
    let id = req.params.id;
    id = id !== undefined ? id :
      res.json("ID cannot be empty");
    user.del(mongoclient,id);
    res.json("OK");
  } catch (e){
    res.json("CANNOT DELETE:",e);
  }
});


//get user
app.get('/get/:id', (req, res) => {
  try{
    const mongoclient = new MongoClient(uri);
    mongoclient.connect()
    let id = req.params.id;
    mongofind.find(id,function(user){
      res.json(user);
    });
  } catch (e) {
    res.json("CANNOT GET USER",e);
  }
});


//create user
app.use(bodyParser.json());
app.post('/create/', (req, res) => {
  try{
    const mongoclient = new MongoClient(uri);
    mongoclient.connect()
    user.create(mongoclient,req.body);
    res.json("OK");
  } catch (e) {
    res.json(e);
  }
});


//send pdf
app.post('/pdf/', function (req, res) {
  try{
    let id = req.body.id;
    mongofind.find(id,function(user){
      const objectPDF = formatToPDF.save(user,id);
      let options = { "format": "A4", };
      pdf.create(objectPDF, options)
        .toFile(`./pdf/user.pdf`, function(err, result) {
          if (err) return console.log(err);
            let file = fs.createReadStream(`./pdf/user.pdf`);
            let stat = fs.statSync('./pdf/user.pdf');
              res.setHeader('Content-Length', stat.size);
              res.setHeader('Content-Type', 'application/pdf');
              res.setHeader('Content-Disposition', `attachment; filename=user.pdf`);
            file.pipe(res);
        });
    });
  } catch (e){
    res.json("CANNOT CREATE PDF",e);
  }
});


app.listen(8080);


