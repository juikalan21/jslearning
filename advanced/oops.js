/*
javascript and classes

javascript is a prototype based language

classes are just given the syntax over prototype based mechanism

object - collection of properties and methods

why use oop? - messed up code

components of oop 
1.Object literal
2.Constructor function
3. Prototypes
4. Classes
5. Instances

4 pillars
1. abstraction - details hide karna - eg - fetch
2. encapsulation - kinda like the wrapper
3. inheritance - 
4. polymorphism - many 
*/

//object literal
const user = {
    username: "jui",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){  //method
        //console.log("Got user details from db");
        //console.log(`Username: ${this.username}`); //to print current
        //console.log(this); //current context - object will print
   }

} 
console.log(user.username);
console.log(user.getUserDetails()); //undefined
console.log(this); //global context this - {} empty - in browser we get window

/* const promise = new Promise()
const date = new Date() */
//new keyword here is a constructor function - allows you to make multiple instances from one object, naya context banane kaam aata hai

function User(username, loginCount, isLoggedIn){
    this.myusername = username //vairable = pass
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`); //method
    }
    //return this - implicitly defined hota he hai
}

/* const userOne = User("jui", 12, true)
const userTwo = User("arpit",13,false) //userTwo will override all the values
console.log(userOne); */

//using new - it will not look messy
const userOne = new User("jui", 12, true)
const userTwo = new User("arpit",13,false) //userTwo will override all the values
//console.log(userOne);
console.log(userOne.constructor); //[Function: User]
//console.log(userTwo);

//new - working mechanism
//first an empty object is created immediately - this is called instance - new object is being created

//second step - constructor function is called due to new keyword - packes all the arguments

//third step - all the arguments get injected in this keyword

//read instanceof method

