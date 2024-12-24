/* const coding = ["js", "rb", "cpp", "py"]

coding.forEach(function (val) {
    console.log(val)
})
 */
//video 29 and 30/51 - confused - watch again

//filter 
/* const coding = ["js", "rb", "cpp", "py"]
const values = coding.forEach( (item) => {
    console.log(item);
    return item
})
console.log(values); //undefined - for each do not return any values */

//const myNums = [1,2,3,4,5,6,7,8,9,10]

/* const newNums =  myNums.filter((num) => num > 4) //konse number chahiye      
console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ] */
/* 
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num) =>{ //use return keyword when we open scope { }
    return num > 4
})
console.log(newNums); */

/* const myNums = [1,2,3,4,5,6,7,8,9,10]
//const newNums = []
myNums.forEach((num) => {
    if(num > 4){
        //newNums.push(num)
    }
})
console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]
 */
//using map

//const newN = myNumbers.map((num) => num + 10)
//console.log(newN);

//chaining
myNumbers = [1,2,3,4,5,6,7]
const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 10)
                .filter((num) => num >= 40)

console.log(newNums);


//reduce - executes a user supplied reducer
 const digits = [1,2,3]
 /* const myTotal = digits.reduce(function (acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
 }, 0)
 console.log(myTotal); //6 */

 const myTotal = digits.reduce((acc, curr) => acc + curr, 0) //smart code
 console.log(myTotal);

 const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "app dev course",
        price: 6000
    },
    {
        itemName: "data science course",
        price: 29999
    },
 ]

 const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
 
 console.log(priceToPay); //42996
  