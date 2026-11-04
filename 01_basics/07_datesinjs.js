let myDate = new Date()
console.log(myDate.toString()); // reeturns results like Wed Nov 04 2026 12:27:25 GMT+0530 (India Standard Time)
//console.log(myDate.toDateString()); // returns Wed Nov 04 2026
//console.log(myDate.toLocaleDateString()); // returns 4/11/2026
//console.log(myDate.toLocaleString()); // returns 4/11/2026, 12:31:07 pm
//console.log(typeof myDate); // result object for interview

//let myCreatedDate = new Date(2023, 0, 23, 5, 3);
//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2024");
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
//console.log(myTimeStamp); // ye time milisecond me return krega result like 1793776658679
//console.log(myCreatedDate.getTime()); //ye bhi time milisecond me return krega result like 1705170600000
//console.log(Math.floor(Date.now()/1000)); // value second me convert ho jayegi for interview

let newDate = new Date();
console.log(newDate.getMonth()); // current month ki array index return krega

console.log(`${myDate.toDateString()} and the Time is ${newDate.getTime()}`);