//Given an array and an integer K, 
//find the maximum for each and every contiguous subarray of size K.

function swlimit(arr,k) {
    //max
    let max = Number.MIN_VALUE;
    //running toal
    let runningTotal = 0;
    //loop all elements
    for(let i=0;i<arr.length;i++) {
        runningTotal += arr[i];
        if (i >= k-1) {
            max = Math.max(runningTotal, max);
            runningTotal -= arr[i - (k-1)];
        }
    }
    //find total for 3 elements by checking
    // calculate running total
    // if running total max assign 
    //reset running total
    return max;
}


console.log(swlimit([3,6,1,7,2,1,2,1,9,5],3));