const arr = [1,2,3,4,5]

// for of loop
for(const num of arr){
//console.log(num);
}

const greetings = "Hellow World!";
for(const gret of greetings)
{
   // console.log(`Each Charector is : ${gret}`);
}

// Maps //isme unique value hoti h for details search map on Mdn in google get this  link and view details  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const map = new Map();
map.set('IN','India')
map.set('USA','United States of America')
map.set('FR','France')

//console.log(map);

for (const [key,value] of map){
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'Football',
    game2: 'Cricket'
}

for (const [key,value] of myObject){ // object not itterable 
    console.log(key, ':-', value);
}