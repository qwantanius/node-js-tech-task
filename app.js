const user = require('./src/user');
const formatToPDF = require('./src/pdf');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs')
const pdf = require('html-pdf');
const mongofind = require('./src/mongofind');


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
  mongofind.find( id,function(user){
    res.json(user);
  });
});


//create user
app.use(bodyParser.json());
app.post('/create/', (req, res) => {
  user.create(req.body);
  res.json("OK");
});


//send pdf
app.post('/pdf/', function (req, res) {
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
});


app.listen(8080);


