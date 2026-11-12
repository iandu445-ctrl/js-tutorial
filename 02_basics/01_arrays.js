const myArr = [0,1,2,3,4,5];
const myHeros = ["Shaktiman","Nagraj","Doga"];
const myArr2 = new Array(1,2,3,4);
//console.log(myArr[3]);

// Array methods
//myArr.push(6); // insert value into array yha 6 insert ho rha h
//myArr.pop(); // delete last record from array yha 6 last record h jo delete hoga
//myArr.unshift(9); // value ko array ke 1st me insert krta h yha 9 start me insert ho rha h
//myArr.shift() // 1st value ko delete krta h ye 9 ko delete kr dega
//myArr.includes(8) // to check 8 available in array or not it return false
//console.log(myArr.indexOf(3)); // to know index of a particulor element

//const newArr = myArr.join(); // to convert array to string with commas
//console.log(newArr);
//console.log(myArr);

//slice,splice
console.log("A ", myArr);
const myNewAr1 = myArr.slice(1,3); // array ka last renge include nhi hota h yani yha index 1,2 wali value return hogi
console.log(myNewAr1);
console.log("K ", myArr); // //slice use rne ke bad original array ki value same rhti h

console.log("B ", myArr);
const myNewAr2 = myArr.splice(1,3); //array ka last renge include hota h yani yha index 1,2,3 wali value return hogi
console.log(myNewAr2);
console.log("C ", myArr); // splice use krne ke bad original array se value move ho jata h