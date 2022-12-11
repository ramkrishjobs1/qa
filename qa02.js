var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27





//Answer
// var createBase = function(base) {
//     return function(addParam1) {
//         return base + addParam1;
//     }
// }

//ES6
// var createBase = (base) => {
//     return (param1) => base + param1;
// }

//var createBase = (base) => (param1) => base + param1;