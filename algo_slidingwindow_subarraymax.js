//Given an integer array nums, find the subarray which has the largest sum and return its sum.

var maxSubArray = function(nums){
    let max = -Infinity
    let temp = 0
    for(let i = 0; i<nums.length;i++){
        console.log('oi',nums[i]);
        temp = Math.max(nums[i], nums[i] + temp);
        console.log('temp',temp);
        console.log('old max',max);
        max = temp > max ? temp : max;
        console.log('new max', max);
    }
    return max
};

//maxSubArray([-1,4,2,-7,10])

/*
You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

The length of the subarray is k, and
All the elements of the subarray are distinct.
Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

A subarray is a contiguous non-empty sequence of elements within an array.
*/

var maxSubArray2 = function(nums, n){
    let maxSum = -Infinity;
    let tempSum = 0;
    let cnt = 0;
    for(let i in nums) {
        if (cnt == n) {
            if (maxSum < tempSum) maxSum = tempSum; 
            tempSum = tempSum - nums[i - n];
            cnt--;
        }
        tempSum = tempSum + nums[i];
        cnt++;
    }
    console.log(maxSum)
}

//maxSubArray2([-1,4,2,8,21,-7,10], 3);

var maxSubArray3 = function(nums, n){
    let maxSum = -Infinity;
    let tempSum = 0;
    let cnt = 0;
    let dup = [];
    for(let i in nums) {
        if (dup[nums[i]]) {
            tempSum = nums[i];
        } else {
            if (cnt == n ) {
                if (maxSum < tempSum) maxSum = tempSum; 
                tempSum = tempSum - nums[i - n];
                cnt--;
            }
            dup[nums[i]] = i;
            tempSum = tempSum + nums[i];
            cnt++;
        }
    }
    console.log(maxSum)
}

//maxSubArray3([-1,4,2,21,8,21,-7,10], 3);

function maxSubarraySum(nums, k) {
    let maxSum = 0;
    let currentSum = 0;
    let windowStart = 0;
    let distinctElements = new Set();
    let lastIndexMap = new Map();
  
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
      // If the current element is already in the set, update the window start position
      while (distinctElements.has(nums[windowEnd])) {
        distinctElements.delete(nums[windowStart]);
        windowStart = lastIndexMap.get(nums[windowStart]) + 1;
      }
  
      // Add the current element to the set and update the sum
      distinctElements.add(nums[windowEnd]);
      currentSum += nums[windowEnd];
  
      // If the size of the set is equal to k, update the max sum
      if (distinctElements.size === k) {
        maxSum = Math.max(maxSum, currentSum);
      }
  
      // Update the last index of the current element in the hash map
      lastIndexMap.set(nums[windowEnd], windowEnd);
    }
  
    return maxSum;
  }
  const nums = [1, 2, 3, 2, 4, 3, 5];
  const k = 3;
  const result = maxSubarraySum(nums, k);
  console.log(result);


