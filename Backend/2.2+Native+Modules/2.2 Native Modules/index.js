const fs = require("fs");

fs.writeFile('nature.txt', "Hello From NodeJS." , (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}); 
fs.readFile('nature.txt', 'utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
  }); 