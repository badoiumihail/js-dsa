/**
 * Statement:
 * > Write a function called isSubsequence() which takes in two strings and checks wether
 * the characters in the first string form a subsequence of the characters in the second
 * string. In other words, the function should check wether the characters in the first
 * string appear somewhere in the second string, without their order changing.
 *
 * Examples:
 * isSubsequence('hello', 'hello world') // true
 * isSubsequence('sing', 'sting') // true
 * isSubsequence('abc', 'abracadabra') // true
 * isSubsequence('abc', 'acb') // false
 */

// initial solution - had to look it up
function isSubsequence(firstStr, secondStr) {
    // initialize the pointers
    let pOne = 0,
        pTwo = 0;

    // if the first string is empty => it will definitely be a subsequence in the second string
    if (!firstStr) return true;

    // iterate through the second string
    while (pTwo < secondStr.length) {
        // search for the current letter from firstStr in secondStr
        if (firstStr[pOne] === secondStr[pTwo]) pOne++;
        // if the first pointer exceeds the firstStr length => we've found a subsequence
        if (pOne === firstStr.length) return true;
        // iterate through the second string
        pTwo++;
    }
    // if the loop condition has expired => no subsequence
    return false;
}

console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
