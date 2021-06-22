const {performance} = require('perf_hooks');

/**
 * Basic function that takes an integer and adds all the numbers up until the input value
 * @param {int} n integer to add up to
 * @returns {int} the sum of all the numbers up to n
 * @author Badoiu Mihail
 * @version 1.0
 */
function addUpTo(n) {

    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

/**
 * Basic implementation of the gaussian sum
 * @param {int} n the last number in the gaussian sum
 * @returns {int} the gaussian sum (n * (n+1)) / 2
 * @author Badoiu Mihail
 * @version 1.0
 */
function sumOfGauss(n) {
    return (n * (n + 1)) / 2
}

const t1 = performance.now()
console.log(`The sum using addUpTo() is: ${addUpTo(1000000000)}`)
const t2 = performance.now()
console.log(`The execution time of addUpTo() is: ${(t2-t1)/1000} seconds. \n`)

const t3 = performance.now()
console.log(`The sum using sumOfGauss() is: ${sumOfGauss(1000000000)}`)
const t4 = performance.now()
console.log(`The execution time of addUpTo() is: ${(t4-t3)/1000} seconds.`)
