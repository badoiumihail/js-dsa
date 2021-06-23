/**
 * Statement: Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another (i.e. cinema <-> iceman).
 *
 * Examples:
 * isAnagram('', '') // true
 * isAnagram('anagram', 'nagaram') // true
 * isAnagram('aaz', 'zza') // false
 * isAnagram('rat', 'car') // false
 * isAnagram('awesome', 'awesom') // false
 */

// literally the same algorithm as in 'frequencyCounter.js"
function isAnagram(firstStr, secondStr) {
    if (firstStr.length !== secondStr.length) {
        return false;
    }

    const firstStrCounter = {};
    const secondStrCounter = {};

    for (const char of firstStr) {
        firstStrCounter[char] = ++firstStrCounter[char] || 1;
    }
    for (const char of secondStr) {
        secondStrCounter[char] = ++secondStrCounter[char] || 1;
    }

    for (const key in firstStrCounter) {
        if (firstStrCounter[key] !== secondStrCounter[key] || !(secondStrCounter.hasOwnProperty(key))) {
            return false;
        }
    }
    return true;
}

// Colt's solution using only one object for counting the values and their frequencies
function validAnagram(firstStr, secondStr) {
    if (firstStr.length !== secondStr.length) {
        return false;
    }

    const lookupLetter = {};

    for (const letter of firstStr) {
        lookupLetter[letter] ? ++lookupLetter[letter] : lookupLetter[letter] = 1;
    }

    for (const letter of secondStr) {
        if (!lookupLetter[letter]) {
            return false;
        } else {
            // decrement the value of 'letter' in case there are more than 1 appearances of said letter
            lookupLetter[letter]--;
        }
    }
    return true;
}

console.log(`V1 > ex1: ${isAnagram('charliebitmyfinger', 'fingerbitmycharlie')}\nex2: ${isAnagram('aaz', 'zaa')}`);
console.log(`V2 > ex1: ${validAnagram('charliebitmyfinger', 'fingerbitmycharlie')}\nex2: ${validAnagram('aaz', 'zaa')}`);
