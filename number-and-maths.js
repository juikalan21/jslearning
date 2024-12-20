const score = 400 //automatically detects that its a number
console.log(score); //400

const balance = new Number(100) //compulsary number he chahiye
console.log(balance); //[Number: 100]

//check in console also - for functions

console.log(balance.toString()); //100
console.log(typeof balance); //object

console.log(balance.toString().length);  //3 //additional string properties

console.log(balance.toFixed(2)); //100.00 - precision value - used in ecommerce app

//to want a precise value
const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)) //23.9

//const otherNumber = 123.8966
//console.log(otherNumber.toPrecision(3)) //124

//to calculate the zeros
const hundreds = 10000000000
console.log(hundreds.toLocaleString()); //10,00,00,00,000
console.log(hundreds.toLocaleString('en-IN')); //10,00,00,00,000 //indian value

// ++++++++++++++++++++++++++ Maths ++++++++++++++++++++

console.log(Math); //Object [Math] {}
console.log(Math.abs(-4)); //absolute value // 4 //negative will change to positive - positive will remain positive

console.log(Math.round(4.6)); //round off - above .5 then next number - like normal math //5

console.log(Math.ceil(4.2)); //top value // it will consider next number only no matter what decimal value // 5
console.log(Math.floor(4.9)); // low value // it will consider the same number only no matter the deimal value //4

// check in inspect  -  console more

//max min
console.log(Math.min(4,3,2,6,7));
console.log(Math.max(4,3,2,6,7));

console.log(Math.random()); // 0 aur 1 ke bich ki value he aati hai
console.log((Math.random()*10) + 1); //so that the value will not come 0


//range
const min = 10
const max = 20
//formula
console.log(Math.floor((Math.random() * (max-min + 1))
)) //math.floor for a single digit value
console.log(Math.floor((Math.random() * (max-min + 1)) + min)) // value should be equal to or above minimum ie 10





