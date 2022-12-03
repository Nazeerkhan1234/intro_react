//map will call the callback functions as many times as the elements in the array
//map will process every value and will apply the instruction that is inside the callback function
//map returns a new array

// let arr = [2, 5, 9, 10, 11];

// let squaredArr = arr.map(function (n) {
//   return n * 3;
// });

//  console.log(squaredArr);

let nameArr = ["Aniket Raj", "Nayan Jha", "Prashant Pandey"];

let modifiedArr = nameArr.map(function(n){
   let partsOfName = n.split(' ')
   return partsOfName
})

console.log(modifiedArr)

// const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
// const inrtToUsd = 74;

// let transactionsInDollar = transactions.map(function (amt) {
//   return (amt / inrtToUsd).toFixed(2);
// });

// console.log(transactionsInDollar);

// use map method and separted every element according to firstName and lastName