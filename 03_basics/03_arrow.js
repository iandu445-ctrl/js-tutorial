//+++++++++++++ Arrow Functions ++++++++++++++
const user = {
    username:"Krishna",
    price:999,

    welconeMessage: function(){
        //console.log(`${this.username}, welcome to website`) // this kyword current contest ko refer krta h
        console.log(this) // result: yha pe user variable ke sare values aayenge kyu ki refer ho rha h kyu ki ye scope ke andar h
    }
}
//user.welconeMessage()
//user.username="Ramu"
//user.welconeMessage()

//console.log(this) // yha pe refer nhi ho rha h and node invorment me run ho rha h isliye  result {} aayega

/*
function  chai(){
    let username ="Krishna"
    console.log(this.username) // ye undefiend dega kyu ki this function me kam nhi krega object me krega
} 
*/
/*
const chai = () => {  //jb '()' iske jagah '=>' use krte h to isko arrow function khte h arrow function ka structure  => {}   
    let username ="Krishna"
    console.log(this.username) // ye undefiend dega kyu ki this function me kam nhi krega object me krega
}
*/

const chai = () => {    
    let username ="Krishna"
    console.log(this) 
}

//chai()
/*
const addTwo = (num1,num2) => { // result : 5 isko implicit return khte h
return num1 + num2
}
*/

//const addTwo = (num1,num2) => num1 + num2 // result : 5 isko explicit return khte h

//const addTwo = (num1,num2) => ( num1 + num2 ) // result : 5
const addTwo = (num1,num2) => ( {username:"Krishna"} )

console.log(addTwo(2,3))
