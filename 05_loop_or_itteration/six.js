// filter

/* const myCoding = ['Java','php','c++','python','javascript'];


const values = myCoding.forEach((item)=>{
console.log(item)
});

console.log(values);
*/

const myNums = [1,2,3,4,5,6,7,8,9,10];
/*
const newNums = myNums.filter((num)=> num > 4)  // result : [ 5, 6, 7, 8, 9, 10 ]
*/
/* // using filter
const newNums = myNums.filter((num)=> { //scope ke andar return likhna must h // result : [ 5, 6, 7, 8, 9, 10 ]
    return num > 4
})
*/

//using foreach // result : [ 5, 6, 7, 8, 9, 10 ]
/*
const newNums=[];
myNums.forEach((num)=>{
    if(num>4){
      newNums.push(num);  
    }
})

console.log(newNums);
*/

const books = [
    {
        title:'Book One', genre:'Fiction', publish:'1981', edition:'2001'        
    },
    {
        title:'Book Two', genre:'Non-Fiction', publish:'1988', edition:'2004'        
    },
    {
        title:'Book Three', genre:'History', publish:'1984', edition:'2008'        
    },
    {
        title:'Book Four', genre:'Science', publish:'1986', edition:'2005'        
    },
    {
        title:'Book Five', genre:'Non-Fiction', publish:'1989', edition:'2003'        
    },
    {
        title:'Book Six', genre:'History', publish:'1991', edition:'2011'        
    },
];

let userBooks = books.filter( (bk) => bk.genre === 'History');
userBooks = books.filter( (bk) => {
    return bk.publish >= 1989 && bk.genre === 'History'
});

console.log(userBooks);