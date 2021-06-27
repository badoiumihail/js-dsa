/**
 * Statement:
 * > Given an array of integers and a number, write a function called maxSubarraySum, which finds
 * the maximum sum of a subarray with the length of the number passed to the function. Note that a
 * subarray must consist of consecutive elements from the original array. In the first example
 * below, [100,200,300] is a subarray of the original array, but [100,300] is not.
 *
 * Examples:
 * maxSubarraySum([100, 200, 300, 400], 2) // 700
 * maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) // 39
 * maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) // 5
 * maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 5) // 7
 * maxSubarraySum([2, 3], 3) // null
 */

function maxSubarraySum(arr, subArrLength) {
    // initialize a variable in which we will store the initial window sum
    let tempSum = 0;

    // if the length of the subarray is greater than the array itself return 0
    if (subArrLength > arr.length) return null;

    // sum the elements of the initial window
    for (let i = 0; i < subArrLength; i++) {
        tempSum += arr[i];
    }

    // initial max
    let max = tempSum;

    // iterating through the remaining part of the array, subtract the first element
    // of the window and add the next element from the array so that the window will shift
    // through the array
    for (let i = subArrLength; i < arr.length; i++) {
        tempSum = tempSum - arr[i - subArrLength] + arr[i];
        // compute max subarray sum
        max = Math.max(tempSum, max);
    }

    return max;
}

console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 5));
console.log(maxSubarraySum([2, 3], 3));
