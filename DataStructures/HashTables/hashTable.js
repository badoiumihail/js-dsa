/**
 * Time complexity BigO:
 * Insertion, Deletion, Access -> O(1) constant time *average case
 * ^it comes down to how efficient the hash function os
 */

class HashTable {
    constructor(size = 53) {
        this.keyMap = Array(size);
    }

    // the underscore is a convention to denote the method
    // (or attribute) as being a private method
    _hash(key) {

        let total = 0;
        const primeCoefficient = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let val = char.charCodeAt(0) - 96;
            total = (total * primeCoefficient + val) % this.keyMap.length;
        }

        return total;
    }

    // sets a key-value pair in the hash table
    set(key, value) {
        // store the hashed key
        const hashedKey = this._hash(key);

        // if the key is already in the hash table
        if (this.get(key)) {
            // find the value at the given key and overwrite it
            this.keyMap[hashedKey].forEach(pair => {
                if (pair[0] === key) {
                    pair[1] = value;
                    return;
                }
            });
            return this.keyMap[hashedKey].length;
        }

        // in case of collision of data, there should already be an array
        // at the hash index, just push the pair list into the array
        // this is called separate chaining (there is also linear probing)
        if (this.keyMap[hashedKey]) this.keyMap[hashedKey].push([key, value]);
        // else just add the list inside another list
        else this.keyMap[hashedKey] = [
            [key, value]
        ];

        // return the number of data pairs the hashed key index has
        return this.keyMap[hashedKey].length;
    }

    // gets the value of a given key from the table
    get(key) {
        // store the hashed key
        const hashedKey = this._hash(key);
        // variable to store the found value of the key
        let value;

        // if the key is valid (or if there is data at the key)
        if (this.keyMap[hashedKey]) {
            // loop through the outer array in case there are multiple pairs inside of it
            this.keyMap[hashedKey].forEach(pair => {
                // when the input key matches the key from the table
                if (pair[0] === key) {
                    // store the value of the key in a variable
                    value = pair[1];
                    // and return from the forEach callback function
                    return;
                }
            });
            // return the value
            return value;
        }
        // return undefined if the key was invalid
        return undefined;
    }

    // returns a set with the keys
    keys() {
        let result = new Set();
        this.keyMap.forEach(bucket => {
            if (bucket) {
                bucket.forEach(pair => {
                    result.add(pair[0]);
                });
            }
        });
        return result;
    }

    // returns a set with the values of the keys
    values() {
        let result = new Set();
        this.keyMap.forEach(bucket => {
            if (bucket) {
                bucket.forEach(pair => {
                    result.add(pair[1]);
                });
            }
        });
        return result;
    }
}

const hashTable = new HashTable(17);
