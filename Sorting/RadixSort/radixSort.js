/**
 * RadixSort
 * > Special sorting algorithm that works on lists of numbers.
 * > It never makes comparisons between elements.
 * > It exploits the fact that information about the size of a number
 * is encoded in the number of digits. More digits means a bigger number.
 * > The one with the buckets, in which we group numbers together depending
 * on the current digit level.
 *
 * Time complexity:
 * > Best case: O(nk)
 * > Worst case: O(nk)
 *
 * Space complexity:
 * > O(n + k)
 */

// helper functions
function getDigit(num, pos) {
    return pos >= 0 ? Math.floor(Math.abs(num) / 10 ** pos) % 10 : null;
}

function digitCounter(num) {
    return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arrOfNums) {
    let max = 0;
    for (const num of arrOfNums) {
        max = Math.max(max, digitCounter(num));
    }
    return max;
}

function radixSort(arr) {
    const iterations = mostDigits(arr);
    for (let k = 0; k < iterations; k++) {
        let buckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            buckets[digit].push(arr[i]);
        }
        console.log(`Iteration ${k}:\nARR - before = [${arr}]`);
        // spread operator
        arr = [].concat(...buckets);
        console.log(`ARR - after = [${arr}]`);
    }
    return arr;
}

exArr = [123, 2, 52132, 172, 89, 44, 92, 11, 8, 15, 1004, 9];
// console.log(getDigit(123456789, 3));
// console.log(digitCounter(12));
// console.log(mostDigits(exArr));
console.log(radixSort(exArr));