//do an async task

//database calls , cryptography related, network related

// less concept of classes 

//more reference to objects

//promise is an object used in asynchronous js

//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//task is in queue but it will not be executed - not yet completed

//its not necessary to access everything everytime

//pending fulfilled and rejected

//1 - creating promise - takes call back - call back hell reduction
//two parts of promise - resolve and rejection
const promiseOne = new Promise(function(resolve,reject){
    
    setTimeout(function(){
        console.log('Async task is completed');
        resolve() //now its connected with .then
    },1000)
})

//consuming 
//then connection with resolve

promiseOne.then(function(){ //call back - function milta hai, this function automatically recieves an arguement whose work is to return the value from the above function
    console.log("promise consumed"); //async task is completed but the promised is not completely consumed

})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async two resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: " jui", email: " jui@kalan.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user); //{ username: ' jui', email: ' jui@kalan.com' }
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true //if false then error
        if (!error){
            resolve({username:"jui", password:"123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => { //chaining
    console.log(username);
}).catch(function(error){
    console.log(error); //now it will print ERROR: Something went wrong 
}).finally(() => console.log("the promise is either resolved or rejected")) //will always execute

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true //if false then no error
        if (!error){
            resolve({username:"javascript", password:"123"})
        } else {
            reject('ERROR: JS  went wrong')
        }
    },1000) //not always handled with then and catch - 
})

async function consumePromiseFive(){
    try{ //use try and catch to handle errors
        const response = await promiseFive
    console.log(response); //async await cannot handle errors directly
    } catch (error){
        console.log(error);
    }
}

consumePromiseFive()

//behind the scenes - 
/* 
async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/juikalan21')
        //console.log(response); //now we can see the results
        const data =  await response.json()
        console.log(data);
    } catch (error) {
        console.log("Error", error);
    }
}

getAllUsers() */ //print hua he nahi - try catch me wrap kardete hai - still it will not print - no data response

// there is no problem in code - response.json takes time to convert - so add await

fetch('https://api.github.com/users/juikalan21')
.then((response) =>{ //arrow function - //data muje milne wala hai 
    return response.json() 
})
.then((data) => {
    console.log(data);
}) //handling response.json
.catch((error) => console.log(error)) //error handling

//value is printing first




// history - Q and blue bird library - now nodejs has given support

