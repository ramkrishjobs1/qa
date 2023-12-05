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
console.log("1.greeteroutside...."+ greeter); // "say Hello instead"
console.log("3."+greeter1) 
if (times > 3) {
    var greeter = "greeterinside"; 
    let greeter1 = "say Hello instead let"; 
    console.log("2.greeterinside....."+greeter) // "say Hello instead"
    console.log("3."+greeter1) // "say Hello instead let"
}

console.log("4."+greeter1) // "let outside"
console.log("5.greeteroutside....."+greeter) // "greeterinside"