//let is block scoped
//const declarations are block scoped
//const cannot be updated or re-declared
const greeting = {
    words: "Hello",
    number: "five"
}

greeting.number = 9;
//greeting = 1;

var greeter = "greeteroutside";
var times = 4;
let greeter1 = "let outside";
console.log("greeteroutside...."+ greeter); // "say Hello instead"

if (times > 3) {
    var greeter = "greeterinside"; 
    let greeter1 = "say Hello instead let"; 
    console.log("greeterinside....."+greeter) // "say Hello instead"
    console.log(greeter1) // "say Hello instead let"
}

console.log(greeter1) // "let outside"
console.log("greeteroutside....."+greeter) // "say Hello instead"