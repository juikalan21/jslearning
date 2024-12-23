const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}
// for in loop for object
for (const key in myObject) { 
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programning = ["js", "rb", "py", "java", "cpp"]

for(const key in programning){
    console.log(key);
    console.log(programning[key]);
}