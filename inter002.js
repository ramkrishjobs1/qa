/*
[1,2,4,4] find pari that adds up to 8
in an ordered list;

2) unordered list
*/

/*
let arr = [1,2,3,4];
let sumMatchNo = 8;
//
let leftPointer = 0;
let rightPointer = arr.length-1;
// 
let found = false;
while(leftPointer < rightPointer) {
    let sum = arr[leftPointer] + arr[rightPointer];
    if (sum === sumMatchNo) {
        found = true;
        break;
    } else if (sum < sumMatchNo) {
        leftPointer++;
    } else {
        rightPointer++;
    }
}

console.log(found);
*/

let arr = [1,1,3,4];
let sumMatchNo = 8;

let diffMap = new Map();
let found = false;
arr.forEach(function(item,i) {
    let diff = sumMatchNo - item;
    if (diffMap.has(item)) {
        found = true;
        return false;
    } else {
        diffMap.set(diff,i)
    }
});

console.log(found);