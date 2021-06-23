/**
 * Multiple Pointers
 * > Creating pointers or values that correspond to an index or position and move towards the beginning,
 * end or middle based on a certain condition. Very efficient for solving problems with minimal space complexity as well.
 */

/**
 * Statement:
 * > Write a function called sumZero which accepts a sorted array of integers. The function should
 * find the first pair where the sum is 0. Return an array that includes both values that sum to zero
 * or 'undefined' if a pair does not exist.
 *
 * Examples:
 * sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
 * sumZero([-2,0,1,3]) // undefined
 */

// 'naive' solution with nested loops
function sumZero(arr) {
    // nested loops => O(n^2) time complexity and O(1) space complexity
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

// better solution
function sumZeroTwo(arr) {
    // making sure the array is sorted
    // BTW, default js sort() is sorting the elements lexicographically
    arr = arr.sort((a, b) => a - b);

    // declare two pointers/indexes
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let sum = arr[i] + arr[j];
        // if values at indexes sum up to 0, return them
        // console.log(`i = ${i}, j = ${j}, arr[i] = ${arr[i]}, arr[j] = ${arr[j]}, valueSum = ${arr[i]+arr[j]}`);
        if (sum === 0) {
            return [arr[i], arr[j]];
            // if sum is positive, shift j to the left since arr is sorted
        } else if (sum > 0) {
            j--;
            // if sum is negative, shift i to the right since arr is sorted
        } else if (sum < 0) {
            i++;
        }
    }
    // if the loop condition expired => no pair was found
    return undefined;
}

exArr = [-4, -3, -2, -1, 0, 5];
exArrTwo = [0, -4, 2, -3, 1, 5, -2, -1];
console.log(sumZero(exArr));
console.log(sumZeroTwo(exArr));