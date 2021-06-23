/**
 * Frequency Counter
 * > This pattern uses objects or sets to collect values/frequencies of values.
 * > This can often avoid the need for nested loops or O(n^2) operations with arrays/strings.
 */

/**
 * Statement:
 * > Write a function called 'same', which accepts two arrays. The function should return
 * true if every value in the array has it's corresponding value squared in the second array.
 * The frequency of values must be the same.
 *
 * same([1,2,3], [4,1,9]) // true
 * same([1,2,3], [1,9]) // false
 * same([1,2,1], [4,4,1]) // false (must be same frequency)
 */

// 'naive' solution
function sameFirst(firstArr, secondArr) {
    if (firstArr.length !== secondArr.length) {
        return false;
    }
    for (let i = 0; i < firstArr.length; i++) {
        // indexOf is looping through secondArr => O(n^2) time complexity
        let correctIndex = secondArr.indexOf(firstArr[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        secondArr.splice(correctIndex, 1);
    }
    return true;
}

// frequency counter solution
// much better approach since we don't have any nested loops => O(n) time complexity
function sameSecond(firstArr, secondArr) {
    // if the arrays aren't the same length return false
    if (firstArr.length !== secondArr.length) {
        return false;
    }
    // declare frequency counter objects
    let freqCounter1 = {};
    let freqCounter2 = {};

    // iterate through the arrays separately and add the values to the freqCounter objects
    for (const val of firstArr) {
        // either add the element or increment it by 1 if it was already in the object
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }
    for (const val of secondArr) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }

    // the main logic of the function
    for (const key in freqCounter1) {
        // if the squared value from the firstArr isn't in secondArr return false
        if (!(key ** 2 in freqCounter2)) {
            return false;
        }
        // if the number of appearances is not the same return false
        if (freqCounter2[key ** 2] !== freqCounter1[key]) {
            return false;
        }
    }
    // if everything was valid then return true
    return true;
}

// examples
console.log(sameFirst([1, 2, 3], [4, 1, 9]));
console.log(sameFirst([1, 2, 3], [4, 9]));
console.log(sameFirst([1, 2, 1], [4, 4, 1]));

console.log(sameSecond([1, 2, 3], [4, 1, 9]));
console.log(sameSecond([1, 2, 3], [4, 9]));
console.log(sameSecond([1, 2, 1], [4, 4, 1]));