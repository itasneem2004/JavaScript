// / The javascript this keyword refers to the object it belongs to.

// it has different value depending on where it is used

// / 1.alone this refers to the global object 
// console.log(this);
// global object == refer to window object

// 2.In regular function, this refers to the global object 
// function sum(){
//     var add = 2+2;
//     console.log("sum of two no is "+add);
//     console.log(this);
// }

// sum();

// 3.In a method, this refers to the owner object
// const aquib = {
//     name : "aquib naqwa",
//     qualif : "Bcom",
//     sum: function(){
//       var add = 2+2;
//       console.log("sum of two no is "+add);
//       console.log(this);
//   }
//   }
  
  
//   aquib.sum();

// // --------------------------------------------------------------------------------------

// console.log(this);

// function division() {
//     var divide = 36/6;
//     console.log("The Division Of The Two Digit Is", +divide);
//     console.log(this);
// }

// division();

// const tasneem = {
//     name : "Tasneem Idrisi",
//     qualif : "Bachelor in Physics",
//     hello: function() {
//         var subtract = 20-5;
//         console.log("subtraction of two no is", +subtract);
//         console.log(this);

//     }
// }

// tasneem.hello();