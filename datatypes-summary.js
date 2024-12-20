
//Primitive - call by value

//7 types : string, number, boolean, null, undefined, symbol, big int

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); //false

const bigNumber = 32347363853482719413433n //automatically big int

//javascript is static or dynamic?

//non primitive - reference type - Arrays, objects, functions

const heros = ["jui", "jeetendra", "leena"]
let myObj = {
    name: "arpit",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber); //big int
console.log(outsideTemp); //null but its an object

//ecma documentation 

console.log(myFunction); //function - object function
console.log(typeof heros); //object

console.log(typeof Symbol); //function

// ******************************************************

// Memory - Stack (Primitive), heap (non primitive)
// we get the copy of memory in stack
// we get the reference to the original memory in heap

//Stack example
let myYoutubeName = "akiracodes"

let anothername = myYoutubeName
anothername = "juicodez"
console.log(myYoutubeName); //akiracodes
console.log(anothername); //juicodez

//Heap example
let user = {
    email : "user@google.com",
    upi : "userbyljfbejr12"
}

let user2 = user

user2.email = "jui@google.com"

console.log(user.email);
console.log(user2.email); 
//both will print jui@google.com
