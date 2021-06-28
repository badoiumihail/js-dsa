/**
 * Statement:
 * > Write a function called productOfArray which takes in an array of numbers and returns
 * the product of them all.
 */

function productOfArray(arr) {
    return !Array.isArray(arr) || !arr.length ? 1 : arr.pop() * productOfArray(arr);
}

console.log(productOfArray([1,2,3,4,5]));
