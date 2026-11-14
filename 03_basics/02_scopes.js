let a =100 // global variable 

if(true) //{} ye hi scope khlata h jiske andar code write hote h (only object ke case me ise scope nhi khte h)
{
let a = 10 // ye only scope ke andar decelear h globle nhi h
//console.log("Inner : ", a) // result 10 becouse local varibale declear ho rha h is scope ka
}

//console.log(a) // result : 100

function one(){
    const username = "Krishna"

    function two(){
        const website ="Youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
//one()

//++++++++++++++++++++++ hoisting ++++++++++++++++++

console.log(addOne(5))
function addOne(num){
return num + 1
}

//addTwo(4) //wrong function call becouse of before function decleartion of hoisting case
const  addTwo = function addTwo(num) // jb hm kisi funtion ko kisi variable me store krte h to ye hoisting khlata h is case me function call always function declear krne ke bad hona must h
{
 return num + 2
}

addTwo(4) // wright function call after function decleartion of hoisting case