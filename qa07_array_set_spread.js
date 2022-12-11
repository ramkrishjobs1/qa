// let arr1 = [1,2,3,4,5,1,2,3];
// console.dir("[1,2,3,4,5,1,2,3] Array..."+arr1);

// let set1 = new Set([...arr1]);
// console.log("[1,2,3,4,5,1,2,3] Set- no duplicates..."+[...set1]);

//---------------------------------------------------------------------
// let set2 = new Set([{id:1,name:'one'},{id:2,name:'two'},{id:1,name:'one'}]);
// let arr2 = new Array([{id:1,name:'one'},{id:2,name:'two'},{id:1,name:'one'}]);
// let arr3 = [...set2];
// let obj1 = {id:3,name:'tthreewo'};
// set2.add(obj1);
// set2.add(obj1)
// console.dir("set with json....")
// console.dir(set2);
// console.dir("converted to array");
// console.dir(arr3);
// console.log('....loop....');

//---------------------------------------------------------------------
 let arr1 = [1,2,3,4,5,1,2,3];
 let set1 = new Set([...arr1]);
 let set2 = new Set([{id:1,name:'one'},{id:2,name:'two'},{id:1,name:'one'}]);
 let arr2 =  [{id:1,name:'one'},{id:2,name:'two'},{id:1,name:'one'}];

 console.log("***"+ arr2.keys());
 for (let id of arr2.keys()) {
    console.log('..cl..'+id+'-')
    //console.log(name)
}

for (let {id} of arr2) {
    console.log('***'+id+'-')
    //console.log(name)
}

for (let {id, name} of arr2.values()) {
    console.log(+id+'-'+name)
    //console.log(name)
}

for (let {id, name} of set2) {
    console.log("set 2..."+id+'-'+name);
}


// var item1 = {id:1,name:'one'};
// let set3 = new Set([\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\item1,{id:2,name:'two'},item1]);
// console.dir(set3);

// console.log('----');
//arr2.forEach((item) => console.log(item));

// arr1.map((item)=> console.log(item));


// 