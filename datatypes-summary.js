
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