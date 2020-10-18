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

Promise.all([getComments(),getUsers()]).then(function(done){
    debugger;
    let [first,second] = done;
    console.dir(second);
}).catch(function(...done){
    console.dir(done);
});

Promise.