// also called logic flow - 
// hamesha pura code execute nahi hona chahiye - only some part should execute on conditional based

//if statement

const temperature = 41
if(temperature < 50){ //condition in  () or comparison
    //console.log("less than 50");
} else{
    //console.log("temperature is greater than 50");
}


//comparison operator - >,<, >=, <=, ==, !=, ===(checks data type, strictly checking), !==
/*
const score = 200

if(score>100){
    const power = "fly"
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`); //here output will be power not defined because of scope of const

// but if use var power = "fly" - the print statment out of bracket will print too 
//always use let and const
*/
//short hand notation
const balance = 1000
//if(balance > 500) console.log("test"); //implicit scope

/* if(balance < 500){
    console.log("less than 500");
} else if(balance < 750){
    console.log("less then 750");
} else if (balance < 900){
    console.log("less than 900");
} else {
    console.log("less than 1200");
} */

//conditional rendering
const userLoggedIn = true
const debitCard = true
const loggedInFormGoogle = false
const loggedInFormEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy courses");
}
if(loggedInFormEmail || loggedInFormGoogle){
    console.log("user logged in");
} 


