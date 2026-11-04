const score = 400

const balance = new Number(100) // yha balance variable ki datatype Number h
console.log(balance)
console.log(balance.toString()) // yha number ko string me convert kiya gya h
console.log(typeof(balance)) // yha balance ki datatype check ho rha h
console.log(balance.toString().length) // yha balance string ki length check ho rha h
console.log(balance.toFixed(2)); // yha decimal value fixed ho rha h
const otherNumber = 123.8976
console.log(otherNumber.toPrecision(3)) // yha value round off ho rha h after decimal or before decimal
const hundreds =  1000000
console.log(hundreds.toLocaleString('en-IN')) // yha value ke bich me comma lga aayega number system ke according default USA ka system hoga but 'en-IN' pass krene pe indian number system bnega

//+++++++++++++++++++ Maths ++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4)); // absolute value dega yani +ve krega
console.log(Math.abs(4)); //ye bhi same absolute value dega yani +ve krega
console.log(Math.round(4.6)); // ye round value dega yani 5
console.log(Math.ceil(4.2)); // ye just upper single value dega yani 5
console.log(Math.floor(4.9)); // ye just lower single value dega yani 4
console.log(Math.min(4,3,6,2,8)); // ye min value return kregi jo 2 h
console.log(Math.max(4,3,6,2,8)); // ye max value return kregi jo 8 h

console.log(Math.random());// ye hmesa 0 se 1 ke bich randome decimal value return krega yani result like 0.407047309683105
console.log((Math.random()*10) + 1); // ye randome value return krega but 0 se start nhi hogayani result like 4.5169763751132415
console.log(Math.floor(Math.random()*10) + 1); // ye minimum single random value return krega like 4

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max - min) + 1) + min); // ye 10 ke 20 ke bich ki value return krega