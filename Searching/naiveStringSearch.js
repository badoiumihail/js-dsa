function naiveStringSearch(str, pattern) {
    let matches = 0;
    for (let i = 0; i < str.length; i++) {
        // define j with var so we can access it outside its loop
        for (var j = 0; j < pattern.length; j++) {
            if (str[i+j] !== pattern[j]) break;
        }
        // check if j reached its max, that means it iterated trough the whole pattern
        if (j === pattern.length - 1) matches++;
    }
    return matches;
}

console.log(naiveStringSearch('lorie loled', 'lol'));
