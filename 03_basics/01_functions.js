
function sayMyName(){
    console.log("K");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("N");
    console.log("A");
}
//sayMyName()

//function addTwoNumbers(number1, number2){
 //console.log(number1 + number2);
//}

function addTwoNumbers(number1, number2){
 //let result = number1 + number2
 //return result
 return number1 + number2
}
const result = addTwoNumbers(2,4)
//console.log("Result : ", result)

function userLoginMessage(username="kk"){
 if((username === undefined)||(!username))
    {
        console.log("Please enter a username")
        return
    }   
return `${username} just loged in`
}

//console.log(userLoginMessage("Krishna"))
//console.log(userLoginMessage())

function CalculateCartPrice(...num1) // yha ...num1 me ...(three dots) ko rest operetor khte h ye spread operator bhi hota h depending on work
{
return num1
}

//console.log(CalculateCartPrice(200,400,500))

const user = {
    username : "Krishna",
    price:999
}
function handleObject(anyObject){
 console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)
/* handleObject({
    username : "KrishnaJi",
    price:699
})
*/
const myNewArray = [200,300,400,500]
function returnSecondValue(getArray){
return console.log(getArray[2]);
}
//returnSecondValue(myNewArray);
returnSecondValue([1200,1300,1400,1500]);