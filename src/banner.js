module.exports = {
  banner: function(){
    let output = "\n\n\n\n\n\n\n";
    output +=    "                             ___                  \n";
    output +=    "                           _|___|_                \n";
    output +=    "       for UFO            [].-.-.[]               \n";
    output +=    "           Engineering     \\_____/               \n";
    output +=    "                              |                   \n";
    output +=    "          ____________________|__________________ \n";
    output +=    "         |                                       |\n"
    output +=    "         |  server on: http://localhost:8080     |\n";
    output +=    "         |_______________________________________|\n";
    output +=    "         |   |                     |             |\n";
    output +=    "         | 1 | /get/:id            | user json   |\n";
    output +=    "         | 2 | body {id} + /del/   | delete user |\n";
    output +=    "         | 3 | body {} + /creaete/ | create user |\n";
    output +=    "         | 4 | body {id} /pdf/     | post pdf    |\n";
    output +=    "         |___|_____________________|_____________|\n";
    output +=    "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";
    console.log(output);
  }
}
