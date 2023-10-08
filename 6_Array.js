let marvel_heros=['Ironman','hulk','spiderman']
let dc_heros=['superman','batman','flash']


let all_heros=[...dc_heros,...marvel_heros]//spread operators

console.log(all_heros)

let all_heros1=marvel_heros.concat(dc_heros);
console.log(all_heros1);

let Num=[1,2,3,4,5]
Num.push(6);
Num.push(7)
Num.pop();
console.log(Num.length);

console.log(Array.isArray('Nikhil'));//false
console.log(Array.from('Nikhil'));//[ 'N', 'i', 'k', 'h', 'i', 'l' ]
let arr=Array.from('Harsh12');

for(let i=0;i<=arr.length;i++){
    if(arr[i]!=i){
        console.log(arr[i]);
    }
    
}
console.log(arr);

