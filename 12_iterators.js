let num=100;
if(num>50){
    console.log("greater number");
}

let age=18;
if(age>19){
    console.log("you can drive");
}
else{
    console.log("you cannot drive")
}

let num2=100;
if(num2>50){
    console.log("greater than 50");
}
else if(num2==100){
    console.log("equal number");
}
else{
    console.log("smaller or not equal");
}


let month="march"
switch (month) {
    case "jan":
        console.log("this is month of jan");
        break;

    case "feb":
        console.log("this is month of feb");
        break
    case "march":
        console.log("this is month of march");
        break
    default:
        break;
}