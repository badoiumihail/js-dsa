/**
 * KMP - Knuth Morris Pratt (KMP) pattern searching algorithm uses degenerating
 * property of the pattern and improves the worst case complexity to O(n).
 *
 * > the term 'degenerating property' means that the pattern has the same sub-pattern
 * that appears more than once inside it.
 *
 * > First, we preprocess the pattern before searching for it in the main string. This
 * involves constructing an 'lps' (longest proper suffix/prefix) array corresponding to
 * the pattern string. Ex. for proper prefixes of "ABC" are "A" and "AB" but not "ABC".
 */

function computeLPSArray(pattern, lps) {
    let len = 0, // length of the previous longest prefix suffix
        i = 1;

    // first element of the lps array is always 0
    lps[0] = 0;

    // iterating through the pattern string
    // and computing lps array
    while (i < pattern.length) {
        if (pattern[i] == pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else { // when pattern[i] !== pattern[len]
            if (len != 0) len = lps[len - 1];
            else {
                lps[i] = 0;
                i++;
            }
        }
    }
    console.log(lps);
}

function KMPSearch(pattern, str) {
    // initialize the lps array with the pattern's length
    // it will store the longest prefix suffix values for the pattern
    let lps = Array(pattern.length),
        patternIndex = [];
        // index for the main string
        i = 0,
        // index for the pattern string
        j = 0;

    // preprocess the pattern by computing the values in the lps array
    computeLPSArray(pattern, lps);

    while (i < str.length) {
        if (pattern[j] === str[i]) {
            i++;
            j++;
        }
        if (j === pattern.length) {
            // console.log(`${i-j}`);
            patternIndex.push(i - j);
            j = lps[j-1];
        }
        // mismatch after j matches
        else if (i < str.length && pattern[j] !== str[i]) {
            // don't compare lps[0] with lps[j-1], they'll surely match
            if (j !== 0) j = lps[j - 1];
            else i++;
        }
    }

    return patternIndex;
}

console.log(KMPSearch('l', 'hello world, hello my friend, hello to everyone hello'));
