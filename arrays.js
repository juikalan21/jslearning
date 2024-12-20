// arrays

const myArr = [0,1,2,3,4,5, true, "jui"] //elements inside array
//arrays in javascript are resizable
// array elements cannot be accessed using arbitrary strings 
// ie console.log(myArr["one"]);

console.log(myArr[0]);

//shallow copies - a shallow copy of an object is a copy whose properties share the same references -jo bhi change hoga original array me bhi change hoga

//deep copies - a shallow copy of an object is a copy whose properties do not share the same references - can manipulate

const myHeroes = ["jui", " jeetendra", "leena"]
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[1]);

//array methods

myArr.push(6)
myArr.push(7)
myArr.pop() //removes the latest added value in array
console.log(myArr);

myArr.unshift(9) //inserts 9 in the start of array
myArr.shift() //removes 9
console.log(myArr); 

console.log(myArr.includes(9)); //false
console.log(myArr.indexOf(3)); //3 // output will be -1 in case of index out of bound

const newArr = myArr.join() //converts in string
console.log(myArr); // this format []
console.log(newArr); // just elements ,
console.log(typeof newArr); //string

//slice-
//splice- 

console.log("A", myArr);
const myn1 = myArr.slice(1,4) //4 is not included

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,4) //4 is included too
console.log("C", myArr); // array is changed - the portion from 1,2,3,4 is removed from array - original array is manipulated
console.log(myn2);

