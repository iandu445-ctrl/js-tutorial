/* const tempreture = 41;
if(tempreture < 50)
{
    console.log("less than 50");
}
else{
console.log("temprecture is greater than 50");
}
*/

// <,>,<=,>=,==,!=,===,!==

/*
const score =200;
if(score>100)
{
    const power ="fly";
    console.log(`User power : ${power}`);
}
*/

/*
const balance =1000;
//if(balance>500) console.log("test");
if(balance < 500)
{
console.log("less than 500");
}
else if(balance < 750)
{
 console.log("less than 750");   
}
else if(balance < 900)
{
 console.log("less than 900");   
}
else
{
 console.log("less than 1200");   
}
*/

const userLogedIn = true;
const debitCard = true;
const logedInfromGoogle =false;
const logedInfromEmail = true;
if(userLogedIn && debitCard)
{
    console.log("Allow to buy course")
}

if(logedInfromGoogle || logedInfromEmail)
{
    console.log("User Loged in")
}