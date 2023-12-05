var getUsers = function() {
    return new Promise((resolve,reject) => {
        var gotUsers = true;
        if (gotUsers) {
            resolve(true);
        } else {
            reject(false);
        }
    });
}

var getComments = function() {
    return new Promise((resolve,reject) => {
        var gotUsers = true;
        if (gotUsers) {
            resolve("comments");
        } else {
            reject("no comments");
        }
    });
}

getComments().then((message) => {
    console.log("promise called")
});

Promise.all([getComments(),getUsers()]).then(function(done){
    debugger;
    let [first,second] = done;
    console.dir(second);
}).catch(function(...done){
    console.dir(done);
});

let promfn = () => new Promise((resolve,reject) => {
    let ok = true;
    ok ? resolve('ok') : reject('fail');
});

promfn().then((value)=> console.log(value+"ok")).catch((value) => console.log(value + "eoor"));