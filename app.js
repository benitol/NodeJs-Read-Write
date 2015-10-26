//require the fs module
var fs = require('fs');

//write to the file
fs.writeFile('ReadAndWrite.txt', 'begin writing to the file: ');

//append to the file
fs.appendFile('ReadAndWrite.txt', 'appending to the file from node ', 'utf8');

//read the file
fs.readFile('ReadAndWrite.txt', 'utf8', function(err, data) {
    if(err) throw err;
    console.log(data);
});