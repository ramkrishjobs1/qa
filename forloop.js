const arr = [10, 12, 15, 21];
//of - loops thru values
for (let i of arr) {
    console.log('1...Index: ' + i + ', element: ' + arr[i]);
}

//in - loops thru indexs
for (let i in arr) {
    console.log('2...Index: ' + i + ', element: ' + arr[i]);
}

//-------------------------set with keys----------------------------
// let pets = new Set(["Cat", "Dog", "Hamster"]);
// pets["species"] = "mammals";

// for (let pet in pets) {
//    console.log(pet); // "species"
// }

// for (let pet of pets) {
//     console.log(pet); // "Cat", "Dog", "Hamster"
// }

// //----------------------array with keys and indexes-------------------------------=
// const nicknames = ['di', 'boo', 'punkeye'];
// nicknames.size = 3;
// nicknames["sizeanother"] = 9;
// for (let nickname in nicknames) {
//     console.log(nickname);
// }
// console.log("***")
// for (let nickname of nicknames) {
//     console.log(nickname);
// }

// //foreach
// nicknames.forEach(item => console.log("foreach....."+item));

// console.log("***")
// //------------object-------------------
// const myObj = { key1 : "one", key2: "tow", key3: "three"};
// //for (let key of myObj) { //TypeError: myObj is not iterable
// for(let key in myObj) {
//     console.log(key);
// }
