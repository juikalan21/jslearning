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