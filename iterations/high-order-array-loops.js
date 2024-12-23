// array specific loop

const arr = [1,2,3,4,5]
// for of
for (const num of arr) {
    console.log(num);
}

const greeting = "hello world"
for(const greet of greeting){
    console.log(`each char is ${ greet}`)
}

//maps - maps are iteratable
const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('FR', "France")
map.set('IN', "India") //will not print as it stores only unique values
console.log(map);

for (const [key, value] of map) {
    //console.log(key); //all values in the form of array 
    //will be printed
    console.log(key, '-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key,value] of myObject) {
    console.log(key, '-', value); //TypeError: myObject is not iterable
}

//