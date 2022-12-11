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

maxSubArray([-1,4,2,-7,10])