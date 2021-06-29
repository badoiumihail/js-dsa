/**
 * Statement:
 * > Write a function called stringifyNumbers which takes in and finds all
 * of the values which are numbers and converts them to strings. Recursion
 * would be a great way to solve this!
 */

// this was pretty bullshit tbh, why did I have to create a new object
// when the problem did not specify that.
function stringifyNumbers(obj) {
    let newObj = {};
    for (const key in obj) {
        if (typeof obj[key] === 'number') newObj[key] = obj[key].toString();
        else if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) newObj[key] = stringifyNumbers(obj[key]);
        else newObj[key] = obj[key];
    }
    return newObj;
}

// pretty impressive solution from the comment section @Igor
function stringifyNumbersTwo(obj) {
    if (!Object.keys(obj).length) return {};

    const key = Object.keys(obj)[0];
    // lookup spread syntax
    const { [key]: val, ...left } = obj;

    // if (Number.isInteger(val)) {
    // if (+val === val) {
    if (typeof val === 'number') {
      obj[key] = String(val);
    } else if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      obj[key] = stringifyNumbers(val);
    }

    // lookup spread syntax
    return {
      ...obj,
      ...stringifyNumbers(left),
    };
  }

const obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));
console.log(stringifyNumbersTwo(obj));
