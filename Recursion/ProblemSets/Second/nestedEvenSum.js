/**
 * Statement:
 * > Write a recursive function called nestedEvenSum. Return the sum of all
 * even numbers in an object which may contain nested objects.
 */

// pretty much the 'flatten' exercise
function nestedEvenSum(obj) {
    let sum = 0;

    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) sum += nestedEvenSum(obj[key]);
        else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) sum += obj[key];
    }

    return sum;
}

const obj = {
    outer: 2,
    obj1: {
        inner: 2,
        obj2: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: 'yup'
        }
    }
}

console.log(nestedEvenSum(obj));
