// foreach loop

const coading = ['Java','php','c++','python','javascript'];

/* coading.forEach(function(item){ //callback function me function name nhi dete h
console.log(item)
})
*/

//coading.forEach((item)=>{console.log(item)}) // same by callback Arrow function
/*
function printMe(item){
console.log(item)
}
coading.forEach(printMe)
*/

/*
coading.forEach((item, index, arr) =>{
  console.log(item, index, arr)  
})
*/

const myCoding = [
    {
        languageName:"Javascript",
        languageFileName:"JS"
    },
    {
        languageName:"Java",
        languageFileName:"Jv"
    },
    {
        languageName:"Php",
        languageFileName:"Ph"
    }
];

myCoding.forEach((item)=>{
console.log(item.languageName)
});