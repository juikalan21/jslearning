const userEmail = "jui@email" //empty array will show true, empty string will show false
if(userEmail){
    console.log("got user email");
} else{
    console.log("do not have email");
}
/*
falsy values 
false - 0, -0, BigInt, 0n, "", null, undefined, Nan - not a number

truthy values
true - "0", 'false', " ", [], {}, function(){} - empty function
*/

//how to check an empty array
if(userEmail.length === 0 ){
    console.log("Array is empty");
}

//how to check an empty object
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){ //this will return all the keys in the format of array
    console.log("Object is empty");
}

//nullish coalescing operator (??): null and undefined
let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//va11 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1); //5 //10 //undefined //10

//ternairy operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")