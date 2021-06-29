/**
 * Statement:
 * > Write a recursive function called capitalizeFirst. Given an array of strings,
 * capitalize the first letter of each string in the array.
 */

function capitalizeFirst(arr) {
    // base case: if array only has one element, return new list with that element capitalized
    if (arr.length === 1) return [arr[0][0].toUpperCase() + arr[0].substr(1)];

    // recursively slice the last element, capitalize it and push it back in the new array
    // ~i think that's how this works at least~
    const res = capitalizeFirst(arr.slice(0, -1));

    // capitalize last element of the array
    const str = arr.slice(-1)[0][0].toUpperCase() + arr.slice(-1)[0].substr(1);

    // push the capitalized element into a new array
    res.push(str);

    return res;
}

exArr = ['car', 'taco', 'banana'];
console.log(capitalizeFirst(exArr));