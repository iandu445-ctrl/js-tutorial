// Singlton (jb hm constructor se object bnate h to Singlton ek object bnta h)
// Object.create

// object literals
const mySymbol = Symbol("key1");
const JsUser = {
    name:"Krishna",
    "full name":"Krishna Kant",
    age:18,
    [mySymbol]:"mykey1",
    location:"Delhi",
    email:"krishna@gmail.com",
    isLogedIn:false,
    lastLogedinDays:["Monday","Wednesday"]
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]); // ye dot se access nhi hoga 
//console.log(JsUser[mySymbol]) // symbole [] iske sath hi decelear krte h and access bhi res: mykey1
//Object.freeze(JsUser); // isse object ko freez krte h iske bad object me koi changes effecatable nhi hota h
JsUser.email="krishnaKant@yahoo.com";
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello KK");
}
JsUser.greeting2 = function(){
    console.log(`Hello User, ${this.name}`);
}
console.log(JsUser.greeting()); // result : Hello KK
console.log(JsUser.greeting2());


