// declare - 
// 1. literal - singleton is not formed
// 2. constructor - singleton is formed
Object.create //constructor method

//singleton



//object literals
const mySymbol = Symbol("key1")
const jsUser = {
    name: "jui",
    "full_name": "jui k", //we cannot access this like jsUser.full_name
    age: 18,
    [mySymbol]: "mykey1", //[] - used for symbol - so we can call the declared mySymbol
    location: "dreaming",
    email: "jk@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(jsUser.email)
console.log(jsUser["email"]) //give it as string only
console.log(jsUser["full_name"]);
//console.log(jsUser.mySymbol);
//console.log(typeof jsUser.mySymbol); //will be string - because it is not yet been used as a symbol
console.log(jsUser[mySymbol]); //mykey1 - this is the correct syntax

//changing values
jsUser.email = "jui@chatgpt.com"
//Object.freeze(jsUser) //freezing the object - no changes can be done now
jsUser.email = "jui@microsoft.com" //will not print 
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}
console.log(jsUser.greeting); //undefined
console.log(jsUser.greeting()); //will show error - TypeError: jsUser.greeting is not a function - because we have freezed the object - so unfreeze it

jsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greeting()); 
console.log(jsUser.greeting2());


