function greet(){
    console.log("Hello world");
}

greet();

function sum(num,num1){
    return num+num1
}

console.log(sum(3,4));

function username(name="sam") {
    if(name===undefined){
        console.log("Please enter your name");
        // return
    }
    else{

        return `${name} , logged In`
    }
}
console.log(username("Nikhil"));

function calculate(val1,val2,...Num1){
    console.log(val1);
    console.log(Num1);
    return val1,val2,Num1
}

console.log(calculate(200,300,400)); //converts to array
calculate(1,2,3,4,5,6,7)
// console.log(calculate(1,2,3,4,5,6))
