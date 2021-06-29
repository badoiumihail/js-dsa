/**
 * Statement:
 * > Write a recursive function called someRecursive which accepts an array and a callback.
 * The function returns true if a single value in the array returns true when passed to the
 * callback. Otherwise it returns false.
 *
 * Examples:
 * someRecursive([1,2,3,4], isOdd) // true
 * someRecursive([4,6,8,9], isOdd) // true
 * someRecursive([4,6,8], isOdd) // false
 * someRecursive([4,6,8], val => val > 10) // false
 */

function someRecursive(arr, callback) {
    if (!arr.length || !Array.isArray(arr)) return false;
    return callback(arr.pop()) ? true : someRecursive(arr, callback);
}

console.log(someRecursive([1,2,3,4,11], val => val % 2 === 0));
