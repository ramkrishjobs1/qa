// function removeDuplicate(sortedArr) {
//     let resultArr = [];
//     //loop thru from 2nd element
//     for (let i=1; i < sortedArr.length; i++){
//         //compare with prev element
//         let currVal = sortedArr[i];
//         let prevVal = sortedArr[i-1];
//         let isLastElement = i === sortedArr.length-1;
//         if (currVal != prevVal || isLastElement) resultArr.push(prevVal);
//         if (isLastElement && currVal != prevVal) resultArr.push(currVal);
//     }

//     return resultArr;
// }

var removeDuplicate= function(nums) {

    let current=0;
    let next=1;
    while(next<nums.length){
        if(nums[current]!==nums[next]){
            current+=1;
            nums[current]=nums[next];
        }
            next+=1;   
    }

    return nums.splice(0,current+1);
};

console.log(removeDuplicate([1,1,2,3,3,3,4,4,5,6,7,7]));
//console.log(removeDuplicate([1,1,2]));

//Given an integer array nums, find the subarray which has the largest sum and return its sum.
// const maxSubArray = (nums) => {
//     let prev = 0; // no prev when we start so make it 0
//     let max = -Infinity; // no max when we start so anything will be the new max 
      
//       for (let i = 0; i < nums.length; i++) { // loop through in vanilla way starting at 0 and going to end by 1
//           const curr = nums[i]; // set our current value as a variable to make it easy to understand 
//           prev = Math.max(prev + curr, curr); // basically poses the question: build or start over?
//           max = Math.max(prev, max) // basically poses the question: update max or not? 
//       }
//       return max
//   }