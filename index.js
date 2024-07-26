

// // const add = ( parameter1 + parameter2) => parameter1 + parameter2;
// // add(2,3);

// // const twoAdder = x => x + 2;
// // const twoAdder =(x) => x + 2;
// // alert(twoAdder(3));

// const sum = (parameter1, parameter2) => {
//     console.log(`Adding ${parameter1}`);
//     console.log(`Adding ${parameter2}`);
//     return parameter1 + parameter2;
// }
// sum(1,2);

// const nums =[1,2,3];
// const squares = nums.map(x => x **2);
// squares;
// nums;

// finishedItems = overdueToDoItems.map(item => item.className = "complete");
// Header.innerText = `You finished ${finishedItems.length} items!`;

// lapsedUserAcconts.map( u => sendBillTo(u.address) );

// // Function expression called divide
// const divide = (x,y) => {
//     console.log(`dividing${x}`);
//     console.log(`dividing${y}`);
//     return x / y;
// } 
// divide(2000 / 100);



// // Arrow function called square
// const square = (c) => {
// console.log(`square${c}`); 
//     return c * c
// }
// square(4);// Output: 16x 

// // Arrow function called add
// const add = (a, b) => {
//     console.log(`Adding ${a}`);
//     console.log(`Adding ${b}`);
//     return a + b ;
// }
// sum(3,5);  // Output: 8

const divide =() => 2000 / 100;
console.log(divide());


const square = (x) => x * x;
console.log(square(4));

const add = (a, b) => a + b;
console.log(add(3, 5));