//How would you use a closure to create a private counter?

var getCounter = (total = 0) => () => ++total;
var counter = getCounter(8);

console.log(counter());
console.log(counter());
console.log(counter());



let getCounter2 = (total=0) => () => total++; 
let counter2 = getCounter2(11);
console.log(counter2());
console.log(counter2());
console.log(counter2());