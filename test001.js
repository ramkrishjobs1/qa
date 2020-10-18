'use strict';


// Complete the checkMagazine function below.
function minSum(num, k) {
    // Write your code here
    console.log(k);
    num.sort((a,b) => b - a);
    //num = mergeSort(num);
    console.log(num);
    if (num.length >= 2) {
        for (let i= 0; i < k; i++) {
            let origNo = num[0];
            num[0] = Math.ceil(num[0]/2);
            for(let j=1;j < k; j++) {
                console.log(",,,"+num);
                if (num[0] < num[j]) {
                    let temp = num[0];
                    num[0] = num[j];
                    num[j] = temp;
                }
            }
        }   
    } else {
        if (num.length === 1) {
            num[0] = Math.ceil(num[0]/2);
        }
    }
    let sum =0;
    console.log(num);
    sum = num.reduce((sum, val) => sum+val)
    return sum;
}

console.log(minSum([20,10,7,6,5],4));

function mergeSort(arr)
{
    if (arr.length < 2)
        return arr;

    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];

    while (left.length && right.length) {
        if (left[0] >= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}