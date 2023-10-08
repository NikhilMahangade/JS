let sym=Symbol('Nik')
let obj={
    name:'Nikhil',
    email:'Nikhil@google.com',
    Nickname:["niku","sonya"],
    [sym]:"Nkkk"

}
console.log(obj["name"]);
console.log(obj.Nickname);
console.log(obj[sym]);
console.log(obj["Nickname"]);

obj.greeting=function(){
    console.log(`good morning,${this.name}`);
}
obj.greeting();

console.log(obj)
obj.name="sotya"
console.log(obj);
// Object.freeze(obj) //no change allow after this



let num={
    1:"one",
    2:"two"
}
let  num2={
    3:"three"
    ,
    4:"four"
}

let allNum={...num,...num2}
console.log(allNum);


let obj2=[{
    id:1,
    email:"h2com"
},
{
    id:2,
    email:"nik2com"
}
]

console.log(obj2[1]);//{ id: 2, email: 'nik2com' }

// object inside object
let obj3={
    name:"harrypotter",
    language:{
        Eng:"english",
        Hin:"Hindi",
        pages:{
            page:100
        }
    }
}

console.log(obj3.language.pages.page);//destructuring