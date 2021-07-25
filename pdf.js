module.exports = {

  saveToPDF: function(user,id){

    const pdf = require('html-pdf');

    let table = `DUMP PDF OBJECT : ${id} <h3>${user.firstname} ${user.lastname}</h3>`;
    table += "<html><head><title>DUMP PDF OBJECT</title></head><body><table>";
    table += "<tr><th>KEY</th><th>VALUE</th>";
    for(let index in user){
      let value = user[index];
      if(typeof value == "object"){
        table += `<tr><td>${index} : {</td><td></td>`;
        for(let i in value){
          table += `<tr><td> . . ${i}</td><td>${value[i]}</td></tr>`;
        }
        table += `<tr><td>}</td><td></td>`;
      } else {
        table += `<tr><td>${index}</td><td>${value}</td></tr>`;
      }
    }
    table += "</table></body></html>"

    let options = {
      "format": "A4",
      "orientation": "landscape",
      "border": {
        "top": "0.1in",
      },
      "timeout": "120000"
    };

    pdf.create(table, options).toFile(`./pdf/user.pdf`, function(err, result) {
      if (err) return console.log(err);
        console.log("pdf create");
    });
  }

}


