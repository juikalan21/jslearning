/*
let score = "33abc" // if = null - output will be 0

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score) //guarentees score is converted in number
console.log(typeof valueInNumber); //will print number - will convert 33abc to number
console.log(valueInNumber); //in actual -  will print Nan - not a number

// "33" = 33
// "33abc" = Nan
// true = 1, false = 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //output will be true

// 1 = true, 0 = false
// "" = false - empty value
// "jui" = true

let someNumber = 28

let stringNumber = String(someNumber)
console.log(typeof stringNumber); //the number 28 has converted to string
*/

// *************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+3);
console.log(3-2);
console.log(2*3);
console.log(2**3); // 2 to the power 3
console.log(2/3); //quotient
console.log(2+3); //remainder

let str1 = "hello"
let str2 = " hello"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + "2"); //12
console.log("1" + 2 + 2); //122 why not 14?? //if string is first all remaining will be treated as string only
console.log(1 + 2 + "2");  //32 //if string is last everything before that string will be performed

console.log((3+4) * 5 % 3); //2

console.log(true); //true
console.log(+true); //1 (true+) = error
console.log(+""); //0

let num1, num2, num3

num1 = num2 = num3 = 2+3 //do not code like this
console.log(num1); //5

let gameCounter = 100
gameCounter++; //postfix and prefix operator js mdn - see
console.log(gameCounter);
