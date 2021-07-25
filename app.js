const user = require('./src/user');
const pdf = require('./pdf');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs')


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



//send pdf
app.get('/pdf/:id', function (req, res) {
    let id = req.params.id;
    pdf.saveToPDF(user.get(id),id);
    let file = fs.createReadStream(`./pdf/user.pdf`);
    let stat = fs.statSync(`./pdf/user.pdf`);
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=user.pdf`);
    file.pipe(res);
});

app.listen(8080);



