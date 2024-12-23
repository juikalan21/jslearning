// immediately invoked function expressions (IIFE)

//global scope ke pollution se problem hoti hai kahi baar then us global scope ke jo bhi variables hai ya declaration hai usko hatane humne IIFE ka use kiya

(function chai(){ //named IIFE
    console.log(`DB CONNECTED`);
})();
/*
( () =>  {
    console.log(`DB CONNECTED TWO`);
})()
*/
( (name) =>  { //simple IIFE - unamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})(`jui`) //treat it like a function only

//when we want to write two IIFE together - always add ;