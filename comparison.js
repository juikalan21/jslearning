console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("2" > 1); //always ensure the data type is same while comparison
console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true - value conversion problem

/*
the reason is that an equality check == and comparisons ><>==<== work differently
comparisons convert null to a number, treating it as 0
thats why (3) null >= 0 is true and (1)  null > 0 is false
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
//all values are false

// comparison and equality are different in javascript

// ===

console.log("2" === 2);

//avoid such comparisons - write clean code
