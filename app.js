const userMock = {
              "firstname":"FOFOFOFOF",
              "lastname":"FFF",
              "email":"FFFFF.com",
              "location":{
                "city":"city",
                "address":"adASDdress"
              },
              "socialmedia":{
                "linkedin":"nboFFFFFFv"
              },
};



const user = require('./src/user');
user.create(userMock);
