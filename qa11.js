function foo(obj) {
    return {
        a : obj.bar,
        b : obj.baz
    }
}

const { a } = foo({bar:27, baz:28});
console.log("a.."+ a);

(function(a) {
    console.log(a);
})();
((a) => console.log(a))(a);

//console.log(rrr);