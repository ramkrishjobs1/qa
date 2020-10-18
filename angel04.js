function foo(x) {
    return function() {
        x++;
        console.log(x);
    }
}

var x=0;
var bar = foo(x);
var bip = foo(x);
bar();
bar();
bip();