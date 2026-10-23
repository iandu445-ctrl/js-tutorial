//1. Datatypes kitne tarah ke hote h?
// => (memory me data ko kaise rakhha jata h and access kiya jata h) memoryallocation and access ke basiss pe 2 types hote h 
/* a. premtive datatype(Call by value)
 1. String 2. Number 3. Boolean 4. null 5. undefiend 6. Symbol 7. Bigint
*/
const score =100 // Number
const scoreValue = 100.3 //Number
const isLogedIn = false //Boolean
const outSideTemp = null //null
let userEmail; // undefiend

const Id = Symbol('123');
const anotherId = Symbol('123');

console.log(Id == anotherId)
const bigNumber = 337383833939302020202n //Bigint

/*b. Non-Premtive/Reference type (Call by reference)
   1. Array 2. Objects 3. Functions
   */
  const heros = ["Shakiman", "Nagraj", "Doga"]; //Array
  let myObj = {
    name:"krishna",
    age:"34" 
  }                 // Objects

  const myFunction = function(){
    console.log("hello world");
  }                       //  Functions

  console.log(typeof myFunction);   // typeof is used to check datatype

