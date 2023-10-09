// //for loop
// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// //while loop
// let i=1;
// while(i<=10){
//     console.log(i*2);//table of 2
//     i++
// }

// //do while
// let j=1;
// do {
//     console.log(j);
//     j++;
// } while (j<=10);

// for of

let arr=[1,2,4,5]
for (const element of arr) {
    console.log(element);
}


// for in
let arr2={
    name:"nikhil",
    nickname:"niku"
}

for (const names in arr2) {
    console.log(names);
}


//for each
let lang=["java","python","cpp"]
lang.forEach((ele)=>{
    console.log(ele);
})