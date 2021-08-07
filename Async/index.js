var fs = require('fs');

function readFile(path) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path, {encoding: 'utf-8'}, function(err, data) {
      if(err)
      {
        reject("Error");
      }
      resolve(data);
    })
  })
}


readFile('data1.txt').then(
  function(data) {
    console.log(data);
    return readFile('data2.txt');
  }
)
.then(
  function(value, value2) {
    console.log(value);
    console.log(value2);
    return readFile('data3.txt');
  }
)
.then(
  function(value) {
    console.log(value);
  }
)
.catch(
  function(err) {
    console.log(err);
  }
)