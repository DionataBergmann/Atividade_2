var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');

let num = lines.shift().split(' ');

let a = Number(num[0])
let b = Number(num[1])
let c = Number(num[2])

if(a-b==0){
    console.log('S')
}else if(a-c==0){
    console.log('S')
}else if(b-c==0){
    console.log('S')   
}else if((a+b)-c==0){
    console.log('S')
}else if((b+c)-a == 0){
    console.log('S')
}else if((a+c)-b==0){
    console.log('S')
}else{
    console.log('N')
}