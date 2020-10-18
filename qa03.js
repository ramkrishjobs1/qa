//How would you use a closure to create a private counter?

var getCounter = (total = 0) => () => ++total;
var counter = getCounter(8);

console.log(counter());
console.log(counter());
console.log(counter());

