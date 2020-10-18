var getValue = function() {
    return new Promise((resolve,reject) => {
            resolve(25);
    });
};

var first = getValue();

first.then(function(x){
    console.log("...1..."+x);
    return x+10;
});

var result = first.then(function(x){
    console.log("...2..."+x);
    return x+10;
});

Promise.all([first]);