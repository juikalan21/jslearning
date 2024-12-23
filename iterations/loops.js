// for

/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */
/* 
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        console.log("5 is best number");
    }
    console.log(element)
    
} */
/* 
for (let i = 0; i <= 10; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`inner loop ${j} and inner loop ${i}`);
        console.log(i + '*' + j + '=' + i*j);
    }
    
} */

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) { //there will be no <= in array
    const element = myArray[index];
  //  console.log(element);
    
}

//break and continue

/* for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("detected 5");
        break //breaking the control flow
    }
    console.log(`value of i is ${index}`);
    
}
 */

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("detected 5");
        continue //value if i is 5 will not be printed
    }
    console.log(`value of i is ${index}`);
    
}

