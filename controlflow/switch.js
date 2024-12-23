//switch - situation where we have to check multiple conditions for a value

/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */

const month = 3

switch (month) { //key is that value what we have to check
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case")
        break;
}

// by default - after the key is matched uske baad ka sara code execute hojata hai except default so thats why we add - break

