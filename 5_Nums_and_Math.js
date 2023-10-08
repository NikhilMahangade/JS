let score=400;
console.log(score);

const balance= new Number(200);
console.log(balance);
console.log(balance.toFixed(2));
// 400
// [Number: 200]
// 200.00
let balance1=123.4657
console.log(balance1.toPrecision(4));//123.5
let balance2=1000000
console.log(balance2.toLocaleString('en-IN'));//10,00,000

"======================================================"
// Math

console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10))

const min=10;
const max=20;
let i=1;
while(i<=10){
    console.log(`${Math.floor(Math.random()*(max-min+1)+min)} Random Numbers`)
    i++;
}