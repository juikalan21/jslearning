/*
const user = {
    username: "jui",
    price: "99",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); //this - current context
        console.log(this);
    }

}
//user.welcomeMessage()
//user.username = "sam" //change of context is possible  the username in the above function is not hardcoded ie is a current context
//user.welcomeMessage()

console.log(this); //{} - empty - because there is no context in the global - in browser the global object is thw window object
*/
/*
function one(){
    let username = "jui"
    console.log(this.username); //will show undefined - because we cannot use this in fuction
    console.log(this); //will print object values
}
one()
*/

//arrow
/*
const chai = function(){
    let username = "jui"
    console.log(this.username);
}
chai() //undefined
*/

const chai = () => {
    let username = "jui"
    console.log(this);
}
chai() //{} - empty object

//arrow function syntax
//onst addTwo = (num1, num2) =>{
//     return num1+num2
//}
//console.log(addTwo(3,4)); //7

//implicit return
// in curly braces {} always use return

//const addTwo = (num1, num2) => num1+num2
//const addTwo = (num1, num2) => (num1+num2)
const addTwo = (num1, num2) => ({username: "jui"})
console.log(addTwo(3,4)); //7