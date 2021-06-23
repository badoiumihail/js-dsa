// Statement: Write a function which takes in a string and returns counts of each character in the string.
//
// Steps to take before actually writing code:
//  - Understand the problem
//  - Explore concrete examples
//      - Edge cases, input and outputs, etc.
//  - Break down the problem in smaller problems
//      - Explicitly write out the steps you need to take
//  - Solve/Simplify
//      - If you can't solve the whole problem, try and focus on the parts that you can solve
//  - Look back & refactor
//      - Can you check the result?
//      - Can you derive the result differently?
//      - Can you understand it at a glance?
//      - Can you use the result or method for some other problem?
//      - Can you improve the performance of your solution?
//      - Can you think of other ways to refactor?
//      - How have other people solved this problem?

function stringCounter(str) {
    if (typeof str !== 'string') {
        console.log(`Invalid input, expected 'string' and got '${typeof str}'.`)
        return 0;
    }
    const data = {};
    // for..of loop that works with strings
    for (const char of str.toLowerCase()) {
        const code = char.charCodeAt(0);
        // ascii code for lower case characters a-z
        if (code > 96 && code < 123) {
            // if (char in data) {
            //     data[char]++;
            // } else {
            //     data[char] = 1;
            // }

            // if data[char] evaluates to true do '++data[char]' else assign 1 to it
            data[char] = ++data[char] || 1;
        } else {
            continue
        }
    }
    return data;
};

str = '!@!#123 Write a function which takes in a string and returns counts of each character in the string';
returnObj = stringCounter(str);

try {
    // for..in loop that works with objects
    for (const key in returnObj) {
        console.log(`${key}: ${returnObj[key]} times.`);
    }
} catch (error) {
    console.log(`${error}: Something went wrong`)
};
