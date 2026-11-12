const marvel_heros = ["thor","Ironmam","spiderman"];
const dc_heros =["superman","flash","batman"];

//marvel_heros.push(dc_heros); // yha dc_heros push ke karan last me add ho gya h as element leki array form me
//console.log(marvel_heros); // result like: [ 'thor', 'Ironmam', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel_heros[3][1]); // result: flash

//const allHeros = marvel_heros.concat(dc_heros); // ye new arry return krega isliye isko new variable me lena chahiye
//console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros]; // ye array ke elements ko sprade krta h same result as concat
//console.log(allNewHeros);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = anotherArr.flat(Infinity); // ye sare ko merge kr dega but unique filter nhi krega
//console.log(real_another_array);

//console.log(Array.isArray("Krishna")); // to check given value is array or not it will return false becouse given value is string
//console.log(Array.from("Krishna")); // ye koi bhi type ki given value ko array return krega
//console.log(Array.from({name:"krishna"}));

let score1 = 1000;
let score2 = 2000;
let score3 = 3000;
console.log(Array.of(score1,score2,score3)); // result : [ 1000, 2000, 3000 ]


