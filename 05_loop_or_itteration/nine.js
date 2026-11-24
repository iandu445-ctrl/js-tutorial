 //JavaScript Demo: Array.prototype.reduce()
 const myNums = [1,2,3];
/*
const myTotal = myNums.reduce(function(accumulator, currentValue){
    console.log(`accumulator is ${accumulator} and currentValue is ${currentValue}`);
  return accumulator + currentValue;
},0)
*/
const myTotal = myNums.reduce((accumulator, currentValue)=>(accumulator + currentValue),0);
 //console.log(myTotal);

 const shoppingCart =[
    {
        itemName: 'Javascript',
        price: 3999
    },
    {
        itemName: 'Datascience',
        price: 19999
    },
    {
        itemName: 'Python',
        price: 7999
    },
 ]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)
console.log(priceToPay);