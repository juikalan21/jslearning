

// {} - defines scope in if else or any function

var c = 300 //will still print 30
let a = 50

if(true) {
    let a = 10
    const b = 20
    var c = 30 //if we write c = 30, still 30 will print - never use var
    //console.log("INNER:", a); //this will print a = 10 - this is called block scope or local scope
    function addnum(){
        //scope inside scope
    }
} 


//console.log(a); //a is not defined
//console.log(b); //b is not defined
//console.log(c); // will print 30 - var
//console.log(a); //will print 50 only - let - which is defined out of scope - global scope - saves from programming bugs

//nested scope

function one(){
    const username = "juikalan"

    function two(){ //two can access one - because for two one is global
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website); //cannot access

    two() //once error is found out above - the remaining after that will not be executed - after commenting - output is username ie jui
}
one()

if(true){
    const username = "juikalan"
    if(username === "juikalan"){
        const website = " youtube"
        //console.log(username + website) //will print - juikalan youtube
    }
    //console.log(website); //cannot access and not defined
}
//console.log(username); //after commenting - same error - cannot access and not defined

// +++++++++++++++++ interesting ++++++++++++++++++++
console.log(addone(5)); //will print
function addone(num){
    return num + 1
}

addTwo(5) //will show error
const addTwo = function(num){ //also called as expression - humne addTwo ko declare karke hold kiya hai in const - so it will show error
    return num + 2
}

