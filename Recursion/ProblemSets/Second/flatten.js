/**
 * Statement:
 * > Write a recursive function called flatten which accepts an array of arrays
 * and returns a new array with all values flattened.
 *
 * Examples:
 * flatten([1,2,3,[4,5]]) // [1,2,3,4,5]
 * flatten([1,[2,[3,4],[[5]]]]) // [1,2,3,4,5]
 */

function flatten(arr) {
    let newArr = []; // better use literal array notation [] than 'new Array()'
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) newArr = newArr.concat(flatten(arr[i]));
        else newArr.push(arr[i])
    }
    return newArr;
}

console.log(flatten([1,[2,[3,4],[[5]]]]));
