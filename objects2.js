//const tinderUser = new Object() // output will be {} - this is a singleton object

const tinderUser = {} // {} //non sigletom object

tinderUser.id = "123adb"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser); //{ id: '123adb', name: 'sammy', isLoggedIn: false }

//nesting
const regularUser = {
    email: "sam@gmail.com",
    fullname: {
        userfullname: {
            firstname: "jui",
            lastname: "kalan"

        }
    }
}
//console.log(regularUser.fullname.userfullname);

//combining objects
 
const obj1 = {1:"a", 2:"b"}
const obj2 = {3: "a", 4: " b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4) //{} - acts as a target and other remaining objects acts as a source

const obj3 = {...obj1, ...obj2} //spread operator - { '1': 'a', '2': 'b', '3': 'a', '4': ' b' }
//console.log(obj3);

//values coming from database

const users = [ //array of objects - comma sepearted values
    {
        id: 1,
        email:  "j@gmail.com"
    },
    {
        id:  1,
        email: "j@gmail.com"
    },
    {
        id:  1,
        email:  "j@gmail.com"
    },
    {
        id:  1,
        email:  "j@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ] - prints all keys in the form of array

console.log(Object.values(tinderUser)); //[ '123adb', 'sammy', false ] - prints all values in the form of array

console.log(Object.entries(tinderUser)); //array inside array - array per key value

//cheecking
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true
console.log(tinderUser.hasOwnProperty('isLogged')); //false


