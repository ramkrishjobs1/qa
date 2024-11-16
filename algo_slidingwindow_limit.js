//Given an array and an integer K, 
//find the maximum for each and every contiguous subarray of size K.

//example 
// [ 1 6 9 2 33 45 67 1 2 45 8 22]
// k = 3

// var for maxTotal, subTotal
// loop thru array
//      if (i < k) {
//          subtotal+
//        else 
//            subTotal =  subTotal - arr[i-k] + arr[i]
//        end
//    maxTotal =  subTotal > maxTotal ? subTotal : maxTotal;
//  endOfLoop

//    return maxTotal

//}

// test algo with example
// [ 1 6 9 2 33 45 67 1 2 45 8 22] [3,6,1,7,2,1,2,1,9,5]
// k = 3

//debug
//logic error
//syntax error

function swlimit7(arr,k) {
    let maxTotal = 0, subTotal = 0;
    for (let i in arr) {
        if (i < k) {
            subTotal += arr[i];
            maxTotal = subTotal;
        } else {
            subTotal = subTotal - arr[i-k] + arr[i];
            maxTotal = maxTotal < subTotal ? subTotal : maxTotal;
        }
    }
    return maxTotal;
}

function swlimit(arr,k) {
    //max
    // let max = Number.MIN_VALUE;
    // //running toal
    // let runningTotal = 0;
    // //loop all elements
    // for(let i=0;i<arr.length;i++) {
    //     runningTotal += arr[i];
    //     if (i >= k-1) {
    //         max = Math.max(runningTotal, max);
    //         runningTotal -= arr[i - (k-1)];
    //     }
    // }
    // //find total for 3 elements by checking
    // // calculate running total
    // // if running total max assign 
    // //reset running total
    // return max;

        //after move slide the window at one position
        let nums = arr;
        let result = [];
        let max = 0;
        let swt = 0;
        for(let i=0; i < nums.length; i++) {
            //add elements until k
            if (i < k) {
                max += nums[i];
                swt = max;
                result.push(nums[i]);
            } else {
                //after move slide the window at one position
                swt = swt - nums[i-k] + nums[i];
                if (swt > max) {
                    result.shift();
                    result.push(nums[i]);
                    max = swt;
                } 
            }
        }
        return max;
}


//console.log(swlimit([3,6,1,7,2,1,2,1,9,5],3));

console.log(swlimit7([3,6,1,7,2,1,2,1,9,5],3));