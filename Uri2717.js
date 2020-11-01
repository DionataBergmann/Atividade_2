var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');

let N = lines.shift();
let num = lines.shift().split(' ');
let A = Number(num[0])
let B = Number(num[1])

if(A+B <= N){
    console.log('Farei hoje!')
}else{
    console.log('Deixa para amanha!')
}