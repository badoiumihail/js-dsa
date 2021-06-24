/**
 * Statement:
 * > Implement a function called countUniqueValues, which accepts a sorted array,
 * and counts the unique values in the array. There can be negative numbers in the
 * array, but it will always be sorted.
 *
 * Examples:
 * countUniqueValues([1,1,1,1,1,2]) // 2
 * countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
 * countUniqueValues([]) // 0
 * countUniqueValues([-2,-1,-1,0,1]) // 4
 */

// my implementation
function countUniqueValues(arr) {
    // if arr is empty return 0
    if (arr.length === 0) return 0;

    // declare indexes and counter
    let i = 0,
        j = i + 1,
        uniqueValues = 1;

    // making sure the array is sorted
    arr = arr.sort((a, b) => a - b);

    // main loop
    while (j <= arr.length - 1) {
        if (arr[i] !== arr[j]) uniqueValues++;
        i++;
        j++;
    }
    return uniqueValues;
}

// Colt's idea to modify the input array in order to only have the unique values
function saveUniqueValues(arr) {
    // if array is empty return 0
    if (arr.length === 0) {
        return 0;
    }

    // declare indexes
    let i = 0,
        j = i + 1;

    // sort array
    arr = arr.sort((a, b) => a - b)

    // main loop
    while (j <= arr.length - 1) {
        // while values are the same increment j to find different value
        if (arr[i] === arr[j]) {
            j++;
        } else {
            // when a different value is found increment i and
            // modify the next same value to the different one
            i++;
            arr[i] = arr[j];
        }
    }
    // slice the remaining array when j had covered the whole array
    arr = arr.slice(0, i + 1);

    // return the length of the array which is the same as the unique values
    return arr;
}

exArr = [1,2,3,4,4,4,7,7,12,12,13,13,13,22,22,23,24,5,92,32,102];
console.log(countUniqueValues(exArr));
console.log(saveUniqueValues(exArr));
