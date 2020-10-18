var a = 2;
console.log(a);
{
    let a = 5;
    console.log(a);
    //var a = 10; 
    //let a = 10;//SyntaxError: Identifier 'a' has already been declared
}
console.log(a);

// var vs let
const arr = [10, 12, 15, 21];
//var
for (var i of arr.keys()) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 1000);
}

//let
for (let i of arr.keys()) {
    setTimeout(function() {
      console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 1000);
  }