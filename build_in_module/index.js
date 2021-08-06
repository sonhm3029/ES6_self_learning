const Person = require('./Person.js');
const fs = require('fs');

const per1 = new Person("son", 20);
//var text = fs.readFileSync('./data.txt', {encoding: 'utf8'});

fs.writeFileSync('./result.txt', 'This is a result!');
console.log(per1);
//console.log(text);