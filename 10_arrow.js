let obj={
    name:"Nikhil",
    email:"nik@gmail.com",
    greet:function(){
        console.log(this.name);
    }

   
}
console.log(obj.greet());


// arrow function
let greet=()=>{
    console.log("good morning");

}
greet();

// let addtwo=(num1,num2)=>{
//     return num1+num2
// }

let addtwo=(num1,num2)=>num1+num2 //compact versions

console.log(addtwo(3,5));
let n=11;
let out=n>10?true:false;
console.log(out)