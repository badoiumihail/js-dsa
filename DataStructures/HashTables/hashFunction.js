// this function has some issues, mainly the fact that the time complexity scales
// with the input data (key) and it doesn't scatter the hashes that well
function simpleHash(key, arrLen) {
    let total = 0;

    // for each character of the string key
    for (const char of key) {
        // convert into UTF-16 (16Bit Unicode Transformation Format)
        // and by subtracting 96 we get the index of the current letter in the alphabet
        let val = char.charCodeAt(0) - 96;

        // increment total with val
        // % the result with arrLen so we get a hash that's in range of the array indices
        total = (total + val) % arrLen;
    }

    // return the hash
    return total;
}

// slight improvement but still pretty bad
function improvedHash(key, arrLen) {
    let total = 0;
    const primeCoefficient = 17;

    // iterate at worst 100 times (this is just to emphasize the fact that the function needs
    // to run at close to constant time, else it won't be efficient enough to be used in a hash table)
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        // store current character into a variable for readability
        let char = key[i];
        // convert character into utf-16, subtract 96, resulting in the index in the alphabet
        let val = char.charCodeAt(0) - 96;
        // compute hash, added the prime coefficient to scatter the results better
        // since it is a constant coefficient, same inputs will always yield same results
        total = (total * primeCoefficient + val) % arrLen;
    }

    // return the hash
    return total;
}

// here we can see that pink and orange will give the same result with the simple hash
console.log(simpleHash('pink', 10)); // 0
console.log(simpleHash('orange', 10)); // 0

// but with the prime coefficient we are able to achieve different hashes for pink and orange
console.log(improvedHash('pink', 10)); // 8
console.log(improvedHash('orange', 10)); // 6

// apparently it's better to use a prime number in the modulo operation
console.log(improvedHash('pink', 17));
console.log(improvedHash('orange', 17));
