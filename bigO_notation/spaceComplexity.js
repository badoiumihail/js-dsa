/**
 * A basic function that takes an array as input and computes the sum of its elements.
 * @param {array} arr an array with integers
 * @returns {int} the sum of the array elements
 * @author Badoiu Mihail
 * @version 1.0
 */
function sum(arr) {
    // this function has O(1) space complexity since it only has 2 variable declarations (total and i)
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total;
}

/**
 * A basic function that doubles the elements of an array and pushes them into another array.
 * @param {array} arr an array with integers
 * @returns {array} another array with each element doubled from the input array
 * @author Badoiu Mihail
 * @version 1.0
 */
function double(arr) {
    // this function has O(n) space complexity because for each element in the input array
    // we assign the double of it to a second array => if the first array has 10 elements,
    // we will have 10 new elements to push to the 2nd array
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}

// simple array with integers as elements
const numbers = [23, 33, 1, 99, 203, 9123, 53, 0, 14, 6, 1230, 62354];

// display the sum of the elements
console.log(`The sum of the array elements is: ${sum(numbers)}`);