/**
 * Statement:
 * > Write a function called minSubarrayLen which accepts two parameters - an array of positive integers,
 * and a positive integer. This function should return the minimal length of a contiguous subarray of which
 * the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
 *
 * Examples:
 * minSubarrayLen([2,3,1,2,4,3], 7) // 2 -> [4,3] is the smallest subarray
 * minSubarrayLen([2,1,6,5,4], 9) // 2 -> [5,4] is the smallest subarray
 * minSubarrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) 1 -> [62] is greater than 52
 */

// colt's solution
function minSubarrayLen(arr, targetSum) {
    let total = 0,
        start = 0,
        end = 0,
        minLen = Infinity;

    while (start < arr.length) {
        // if current window doesn't add up to the given sum
        // then move the window to the right
        if (total < targetSum && end < arr.length) {
            total += arr[end];
            end++;
        } else if (total >= targetSum) {
            // if current window adds up to at least the sum
            // given then we can shrink the window
            minLen = Math.min(minLen, end - start);
            total -= arr[start];
            start++;
        } else {
            // current total less than required total but we reach end
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}