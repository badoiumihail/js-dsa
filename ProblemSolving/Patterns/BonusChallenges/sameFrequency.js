/**
 * Statement:
 * > Write a function called sameFrequency. Given two positive integers, find out if the two
 * numbers have the same frequency of digits. The solution MUST have the following complexities:
 * Time: O(n)
 *
 * Examples:
 * sameFrequency(182,281) // true
 * sameFrequency(34,14) // false
 */

// my implementation of a length function for numbers
function numLength(num) {
    let digits = 0,
        tmpNum = num;
    while (tmpNum) {
        digits++;
        tmpNum = Math.floor(tmpNum / 10);
    }
    return digits;
}

// nice function that computes a number's length in a mathematical way
function simplerNumLength(num) {
    return Math.floor(Math.log10(num)) + 1;
}

// very useful and smart implementations of digit generators of a number
function* reversedDigitGen(num) {
    let tmpNum = num;
    while (tmpNum > 0) {
        yield tmpNum % 10;
        tmpNum = Math.floor(tmpNum / 10);
    }
}

function* digitGen(num) {
    for (let i = numLength(num); i > 0; i--) {
        // tbh I still don't understand completely why this works
        yield Math.floor(num / Math.pow(10, i - 1)) % 10;
    }
}

// initial solution
function sameFrequency(firstNum, secondNum) {
    const digitsOne = {};
    const digitsTwo = {};

    while (firstNum !== 0) {
        let lastDigit = firstNum % 10;
        digitsOne[lastDigit] = ++digitsOne[lastDigit] || 1;
        // digitsOne[lastDigit] ? ++digitsOne[lastDigit] : digits[lastDigit] = 1;
        firstNum = Math.floor(firstNum / 10);
    }

    while (secondNum !== 0) {
        let lastDigit = secondNum % 10;
        digitsTwo[lastDigit] = ++digitsTwo[lastDigit] || 1;
        secondNum = Math.floor(secondNum / 10);
    }

    for (const key in digitsOne)
        if (digitsOne[key] !== digitsTwo[key]) return false;

    return true;
}

// generator solution found in comment section
function nicerSameFrequency(firstNum, secondNum) {
    // verifying if the numbers have the same amount of digits
    if (simplerNumLength(firstNum) !== simplerNumLength(secondNum)) return false;

    // initializing the frequency counter object
    let digits = {};

    // adding values to the object
    for (const digit of digitGen(firstNum)) digits[digit] = ++digits[digit] || 1

    // main loop
    for (const digit of digitGen(secondNum)) {
        // check if secondNum's digits are in the object that contains the firstNum's digits
        if (!digits[digit]) return false;

        // decrementing the values for the case in which there are multiple appearances of the same digit
        digits[digit]--;
    }

    // return true if everything went ok and both numbers have the same values and value frequencies
    return true;
}

console.log('sameFrequency():')
console.log(sameFrequency(223, 443));
console.log(sameFrequency(123, 321));
console.log(sameFrequency(4441, 4444));
console.log(sameFrequency(44441, 444));
console.log(sameFrequency(444, 24444));
console.log(sameFrequency(4444, 2444));
console.log('\nnicerSameFrequency():')
console.log(nicerSameFrequency(223, 443));
console.log(nicerSameFrequency(123, 321));
console.log(nicerSameFrequency(4441, 4444));
console.log(nicerSameFrequency(44441, 444));
console.log(nicerSameFrequency(444, 24444));
console.log(nicerSameFrequency(4444, 2444));
