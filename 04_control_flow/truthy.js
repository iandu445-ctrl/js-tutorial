/* const userEmail = "krishna@gmail.com";
if(userEmail){
    console.log("Got user email");
}
else
{
    console.log("Don't have user email");
}
*/
// falsy value : false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy value : "0", 'false', " ", [], {}, function(){},
/*if(userEmail.length==0)
{
    console.log("Array is empty");
}
*/
const emptyObj = {}

if(Object.keys(emptyObj).length == 0) // Object.keys(emptyObj) isse object ko Array me convert kiya gya h
{
    console.log("Object is empty")
}

//Nullish Coalesching Operator (??): null  undefiend

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20;
console.log(val1);

// Terniary Operator
// condition ? true:false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");