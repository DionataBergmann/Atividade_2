var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');


let L = lines.shift();

 console.log(L.charCodeAt(0)-64)