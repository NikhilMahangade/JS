let word="HEN01235"
let arr=[1,2,3,4,5,6]
for(let char of word){
    // for(let i=0; i<=arr.length;i++){
    for (const ele of arr) {
        
            if(char==ele){
            console.log(ele);
        }
    }
}