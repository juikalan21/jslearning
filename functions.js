function sayMyName(){
    console.log("J");
    console.log("U");
    console.log("I");
}
//sayMyName() //calling the function
/*
function addTwonumbers(num1, num2){ //parameters - jab function ki defination banate hai
    console.log(num1 + num2);
}
*/
function addTwonumbers(num1, num2){ //parameters - jab function ki defination banate hai
    //let result = num1 + num2
    //return result
    return num1 + num2
    console.log("Jui") //this will not be executed - anything after return is not executed
}
addTwonumbers(3,4) //passing arguements - jab function ko call karte hai - passing values
addTwonumbers(3,"4") //34
addTwonumbers(3, null) //3

//storing in variable
const result = addTwonumbers(3,5) //8
//console.log("result is" + result); //result is undefined

function loginUserMessage(username){ //can give default value too - (username = "sam" ) //now the if block will never be executed because username can never be undefined

//but if still pass a value in line 35 - it will override and execute the new value

    if(username == undefined){ //! symbol - turns true false and vice versa - !username also means username is undefined
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("juikalan")) //juikalan just logged in
console.log(loginUserMessage("")) //just logged in
console.log(loginUserMessage()) //undefined just logged in

//shopping cart - user keeps adding the items

function calculateCartPrice(num1){ 
    return num1
}
//console.log(calculateCartPrice(2)) //2
//console.log(calculateCartPrice(200,400,500)) //200 only

//so to solve this we will use the rest operator

function calculateCartPrice(...num1){ 
    return num1
}
//console.log(calculateCartPrice(200,400,500))//[ 200, 400, 500 ] //values will add in array

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,5600))
//the output will be [ 500, 5600 ] as 200 and 400 are val1 and val2 then the rest is stored in array


const user = { //creating object
    username: "jui",
    price: 199
}
function handleObject(anyobject){ //creating function
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user) //calling 
handleObject({ //direct object pass karna
    username: "sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray)); //400
console.log(returnSecondValue([200,400,100,600]));



