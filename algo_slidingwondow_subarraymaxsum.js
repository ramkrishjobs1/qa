/*

The sliding window algorithm is a technique used for efficiently processing arrays or lists by maintaining a set of elements within a "window" that slides through the entire collection. This approach is particularly useful when dealing with problems that require finding an optimal or specific solution within a subarray or subsequence of elements.

The basic idea is to define a window of a fixed size and slide it through the array, updating the window at each step. This can be applied to various types of problems, including finding the maximum or minimum value within a subarray, calculating running averages, or identifying subarrays that satisfy certain conditions.

Here's a general explanation of the sliding window algorithm:

Initialize the Window:

Start with the initial window by selecting the first 'k' elements, where 'k' is the size of the window.
Process the Initial Window:

Perform the initial processing or calculation based on the elements within the window.
Slide the Window:

Move the window one step at a time (i.e., slide the window) by removing the first element and adding the next element.
Update the Result:

Update the result or perform additional processing based on the new elements within the updated window.
Repeat:

Continue sliding the window until the end of the array is reached.
The sliding window technique is especially useful for problems that involve optimizing a solution within a subarray, as it reduces the time complexity by avoiding redundant calculations. It can often lead to solutions with linear or near-linear time complexity.

Let's illustrate the sliding window algorithm with a simple example:

Problem: Find the maximum sum of a subarray of size 'k' within an array.

javascript
Copy code
function maxSubarraySum(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  // Calculate the initial window sum
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  // Slide the window through the array
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

const array = [2, 1, 3, 4, 1, 2, 1, 5, 4];
const k = 3;
const result = maxSubarraySum(array, k);
console.log(result); // Output: 12 (sum of subarray [4, 1, 2])
In this example, the sliding window of size 'k' is used to efficiently find the maximum sum of a subarray within the given array.

*/

function maxSubarraySum(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
  
    // Calculate the initial window sum
    for (let i = 0; i < k; i++) {
      windowSum += arr[i];
    }
  
    // Slide the window through the array
    for (let i = k; i < arr.length; i++) {
      windowSum = windowSum - arr[i - k] + arr[i];
      maxSum = Math.max(maxSum, windowSum);
    }
  
    return maxSum;
  }
  
  const array = [2, 1, 3, 4, 1, 2, 1, 5, 4];
  const k = 3;
  const result = maxSubarraySum(array, k);
  console.log(result); // Output: 12 (sum of subarray [4, 1, 2])
  