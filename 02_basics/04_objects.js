const tindorUser = new Object(); // singleton object
//const tindorUser = {}; //Non singleton object
tindorUser.id="12133"
tindorUser.name="Roshan"
tindorUser.IsLogedIn=false
//console.log(tindorUser);

const regularUser = {
    email:"Krishna@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Krishna",
            lastname:"Kant"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
//const obj3 = {obj1, obj2} // result : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//const obj3 = Object.assign(obj1, obj2); // ye sabko ek sath merge kr deta h result : { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//const obj3 = Object.assign({}, obj1, obj2); // ye bhi sabko ek sath merge kr deta h result : { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj3 = {... obj1, ... obj2} // ye bhi sabko ek sath merge kr deta h result : { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//console.log(obj3);
const users = [
    {
        id: 1,
        name: "kk"
    },
     {
        id: 2,
        name: "pk"
    },
     {
        id: 3,
        name: "Dk"
    }
]       // Array of Objects

//console.log(users[1].name) // result : pk
//console.log(tindorUser);
//console.log(Object.keys(tindorUser)); // ye array return krega
//console.log(Object.values(tindorUser)); // ye array return krega
//console.log(Object.entries(tindorUser)); // ye nested array me return krega

//console.log(tindorUser.hasOwnProperty('IsLogedIn')) // ye check krega ki IsLogedIn property tindorUser is object ki hai ya nhi true/false return krega

const course = {
    coursename:"Jsinhindi",
    price:"999",
    courseInstructor:"Krishna"
}

const {courseInstructor:Instructor} = course // destructuring the object
console.log(Instructor);

