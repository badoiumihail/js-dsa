/**
 * Statement:
 * > Write a function called isPalindrome which returns true if the string
 * passed to it is a palindrome. Otherwise returns false.
 */

function isPalindrome(str) {
    if (str.length === 0) return true;
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1));
    return false;
}

console.log(isPalindrome('12 21'));
