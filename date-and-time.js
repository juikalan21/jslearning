//dates - calculates in mili seconds

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //object 

let myCreatedDate = new Date(2023, 0, 23) //month starts from 0 in javascript
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString()); //will give time also

let myCreatedDate3 = new Date("2023-01-14") //yy mm dd
console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date("01-23-3000") //mm dd yy
console.log(myCreatedDate4.toLocaleString()); 

//timestamp - using in polls, fastest answer checking in quiz

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

//converting in seconds
console.log(Date.now()/1000); //will give decimal value
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1 );

//`${newDate.getDay()} and the time`

newDate.toLocaleString('default,'{
    weekday: "long",
    
})





