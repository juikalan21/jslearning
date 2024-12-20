const name = "jui"
const repoCount = 10

console.log(name + repoCount + " value"); //do not use this - outdated

//using backquotes - string intercolation 
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('juibts-yt-com')

/*
in console:

> const gameName = new String('juibts')
< undefined
> gameName
< you will see many string method/functions in prototype
*/

console.log(gameName[0]); //j - key value pair access
console.log(gameName.__proto__); //{} empty 

console.log(gameName.length);
console.log(gameName.toUpperCase()); //JUIBTS - it has not changed our original value

console.log(gameName.charAt(2)); //i
console.log(gameName.indexOf('t'));//4

//slice
const newString = gameName.substring(0, 4)
console.log(newString); //juib 0123 - the last character we put is not included - will not obey negative values

const anotherString = gameName.slice(-8,4) //we can also give minus values - reverse
console.log(anotherString); //uib

//trim and replace

const newStringOne = " jui   "
console.log(newStringOne); //will print with space
console.log(newStringOne.trim()); // will remove space
//trim start and trim end also exists

const url = "https://juikalan.com/jui%20kalan"

console.log(url.replace('%20', '-')); //https://juikalan.com/jui-kalan

console.log(url.includes('jui')); //checking - true
console.log(url.includes('arpit')); //checking - false

//converting string to array
console.log(gameName.split('-')); //[ 'juibts', 'yt', 'com' ] 

// 





