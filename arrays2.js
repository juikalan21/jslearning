const marvel_heroes = ["thor", " ironman", "spiderman"]
const dc_heroes = ["batman", "superman", "flash"]

marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes); //[ 'thor', ' ironman', 'spiderman', [ 'batman', 'superman', 'flash' ] ] 

// it will take array as a single element

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes); //same output as above

const all_new_heroes = [...marvel_heroes, ...dc_heroes] //spread operators
console.log(all_new_heroes); //same output

const another_array = [1,2,3,[4,5,6],7,[6,7 ,[4,5]]]
const real_another_array = another_array.flat(Infinity) //all indepths
console.log(real_another_array);

console.log(Array.isArray("jui")) //true or false
console.log(Array.from("jui")) //make an array
console.log(Array.from({name: "jui"})) //interesting case

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]