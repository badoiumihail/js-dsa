/**
 * Divide and Conquer
 * > This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
 * This pattern can tremendously decrease time complexity.
 */

/**
 * Statement:
 * > Given a sorted array of integers, write a function called 'search', that accepts a value and returns
 * the index where the value passed to the function is located. If the value is not found, return -1.
 *
 * Examples:
 * search([1,2,3,4,5,6], 4) // 3
 * search([1,2,3,4,5,6], 6) // 5
 * search([1,2,3,4,5,6], 11) // -1
 */

// 'naive' solution
function naiveSearch(arr, num) {
    // make sure array is not empty
    if (!arr) return null

    // main loop
    for (let i = 0; i < arr.length; i++)
        if (arr[i] === num) return i;

    // if loop ended with no return => no valid index was found => return -1
    return -1;
}

// binary search using the divide and conquer principle => O(log n) time complexity
function search(arr, num) {
    // declare 2 indexes at both ends of the array
    let min = 0,
        max = arr.length - 1;

    // there is a case in which the indexes will be equal and there we'll find the desired number
    while (min <= max) {
        // compute the middle element's value and index
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];
        // console.log(`arr[${middle}] = ${currentElement}\nmax = ${max} & min = ${min}`);

        // if the number we're searching is greater than the middle element
        // that means it can't be in the first half of the data set => compute
        // new min index to be middle index +1 so we can search only in the 2nd half
        if (currentElement < num) {
            min = middle + 1;
            // if the number is less than the middle element then the max index will become
            // middle index - 1 so that we can search in the first half of the data set
        } else if (currentElement > num) {
            max = middle - 1;
            // this is the case when currentElement === num => return 'middle' which is the currentElement's index
        } else {
            return middle;
        }
    }
    // return -1 in case the loop's condition expired and no return was made
    return -1;
}

let exArr = [1, 2, 3, 4, 5, 6];
console.log(`Naive search: ${naiveSearch(exArr, 4)}`);
console.log(`Binary search: ${search(exArr, 4)}`);
