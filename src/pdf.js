module.exports = {

  save: function(user,id){
    let table = `DUMP PDF OBJECT : ${id} <h3>${user.firstname} ${user.lastname}</h3>`;
    table += "<html><head><title>DUMP PDF OBJECT</title></head><body><table>";
    table += "<tr><th>KEY</th><th>VALUE</th>";
    user["_id"] = id;
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

    return table;
  }

}


