/**
 * Statement:
 * > Implement a function called areThereDuplicates() which accepts a variable number of arguments, and checks
 * wether there are any duplicates among the arguments passed in. You can solve this using the frequency counter
 * pattern OR the multiple pointers pattern.
 *
 * Examples:
 * areThereDuplicates(1, 2, 3) // false
 * areThereDuplicates(1, 2, 2) // true
 * areThereDuplicates('a', 'b', 'c', 'a') // true
 */

// initial implementation with multiple pointers
function areThereDuplicates(...args) {
    // this works if the args has only one data type inside
    // typeof args[0] === 'string' ? args = args.sort() : args = args.sort((a, b) => a - b);
    args = args.sort();
    console.log(args);

    let firstPointer = 0,
        secondPointer = firstPointer + 1;

    while (secondPointer < args.length) {
        // console.log(`${args[firstPointer]} <> ${args[secondPointer]}`);
        if (args[firstPointer] === args[secondPointer]) return true
        firstPointer++;
        secondPointer++;
    }
    return false;
}

// initial implementation with frequency counter
function areThereDuplicatesTwo(...args) {
    const freqCounter = {};

    for (const element of args) freqCounter[element] ? ++freqCounter[element] : freqCounter[element] = 1

    for (const key in freqCounter)
        if (freqCounter[key] > 1) return true;

    return false;
}

// implementation using a set, beyond the scope of the exercise though
function checkDuplicates(...args) {
    if (!args) return null;
    const argSet = new Set(args);
    return argSet.size === args.length ? false : true;

    // alternative one-liner
    // return new Set(args).size !== args.length;
}

console.log(`With freq counter: ${areThereDuplicatesTwo('a', 'b', 'c', 'a')}`);
console.log(`With freq counter: ${areThereDuplicatesTwo('a', 'b', 'c', 'd')}`);
console.log(`With freq counter: ${areThereDuplicatesTwo('a', 'b', 'c', 'a', 'a')}`);
console.log(`With freq counter: ${areThereDuplicatesTwo(1, 2, 3)}`);
console.log(`With freq counter: ${areThereDuplicatesTwo(1, 2, 3, 1)}`);
console.log(`With freq counter: ${areThereDuplicatesTwo(1, 2, 3, 1, 'a', 'b')}`);

console.log();
console.log(`With multiple pointers: ${areThereDuplicates('a', 'b', 'c', 'a')}`);
console.log(`With multiple pointers: ${areThereDuplicates('a', 'b', 'c', 'd')}`);
console.log(`With multiple pointers: ${areThereDuplicates('a', 'b', 'c', 'a', 'a')}`);
console.log(`With multiple pointers: ${areThereDuplicates(1, 2, 3)}`);
console.log(`With multiple pointers: ${areThereDuplicates(1, 2, 3, 1)}`);
console.log(`With multiple pointers: ${areThereDuplicates(2, 3, 1, 'a', 'b', 'c', 'a')}`);
