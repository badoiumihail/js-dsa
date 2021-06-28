/**
 * Statement:
 * > Write a function called findLongestSubstring(), which accepts a string and returns
 * the length of the longest substring with all distinct characters.
 *
 * Examples:
 * findLongestSubstring('') // 0
 * findLongestSubstring('rithmschool') // 7
 * findLongestSubstring('thisisawesome') // 6
 * findLongestSubstring('thecatinthehat') // 7
 * findLongestSubstring('bbbbbbb') // 1
 * findLongestSubstring('longestsubstring') // 8
 * findLongestSubstring('thisishowwedoit') // 6
 */

// colt's solution
function findLongestSubstring(str) {
    let longest = 0,
        seen = {},
        start = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        console.log(`i = ${i}`)
        if (seen[char]) {
            start = Math.max(start, seen[char]);
            console.log(`start = ${start}\nseen[char=${char}] = ${seen[char]}`);
        }
        longest = Math.max(longest, i - start + 1);
        seen[char] = i + 1;
        console.log(`longest = ${longest}\n`);
    }

    return longest;
}

console.log(findLongestSubstring('abcdefghijklmnopqrstuvwxyz'));
