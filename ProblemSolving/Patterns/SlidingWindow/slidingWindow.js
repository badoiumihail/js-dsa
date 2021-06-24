/**
 * Sliding Window
 * > This pattern involves creating a window which can either be an array or number from one position to another.
 * Depending on a certain condition, the window either increases or closes (and a new window is created). Very
 * useful for keeping track of a subset of data in an array/string etc.
 */

/**
 * Statement:
 * > Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 *
 * Examples:
 * maxSubarraySum([1,2,5,2,8,1,5],2) // 2
 * maxSubarraySum([1,2,5,2,8,1,5],4) // 17
 * maxSubarraySum([4,2,1,6], 1) // 6
 * maxSubarraySum([4,2,1,6,2],4) // 13
 * maxSubarraySum([],4) // null
 */

// 'naive' solution - with nested loops => O(n^2) time complexity
function maxSubarraySumNaive(arr, num) {
    // if n exceeds the number of elements in the array, return null;
    if (num > arr.length) return null;

    // address the case in which num is not given
    if (!num) return `Something went wrong. Param num is ${typeof num}.`

    // declare a variable to compare the max sum with
    let max = -Infinity;

    // main loop
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;

        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }

        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

// sliding window solution => Linear time complexity O(n)
function maxSubarraySum(arr, num) {
    // variable initialization
    let maxSum = 0;
    let tempSum = 0;

    // address the case in which num is not given
    if (!num) return `Something went wrong. Param num is ${typeof num}.`

    // address the case in which the number of elements in the array is less than num
    if (arr.length < num) return null;

    // create the initial 'window' of num elements starting at index 0
    for (let i = 0; i < num; i++) maxSum += arr[i];

    // store the sum in a temp variable
    tempSum = maxSum;

    // looping through the rest of the array, first index after the initial window
    for (let i = num; i < arr.length; i++) {
        // slide the window forward by subtracting the first element and adding a new one
        tempSum = tempSum - arr[i - num] + arr[i];

        // this evaluates to tempSum = tempSum - (arr[i - num] + arr[i])
        // tempSum -= arr[i - num] + arr[i]

        // compare the previous window's sum with the current one's
        maxSum = Math.max(maxSum, tempSum);
    }

    // return the maximum sum of consecutive num elements
    return maxSum;
}

exArr = [1, 3, 7, 4];
console.log(`Sliding window solution: ${maxSubarraySum(exArr,5)}`);
console.log(`Naive solution: ${maxSubarraySumNaive(exArr,5)}`);
