/**
 * Statement:
 * > Write a recursive function called upperCaseWords. Given an array of words,
 * return a new array containing each word in uppercase.
 */

// initial solution
function upperCaseWords(arr) {
    let newArr = [arr[0].toUpperCase()];
    if (arr.length === 1) return newArr;
    newArr = newArr.concat(upperCaseWords(arr.slice(1)));
    return newArr;
}

// colt's solution
function capitalizeWords(arr) {
    if (arr.length === 1) return [arr[0].toUpperCase()];
    let res = capitalizeWords(arr.slice(0, -1));
    res.push(arr.slice(-1)[0].toUpperCase());
    return res;
}

console.log(upperCaseWords(['i', 'am', 'learning', 'recursion']));
console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']));
