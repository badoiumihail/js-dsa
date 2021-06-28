/**
 * Statement:
 * > Write a function called power which accepts a base and an exponent.
 * The function should return the power of the base to the exponent. This
 * function should mimic the functionality of Math.pow() - do not worry
 * about negative bases and exponents.
 */

function toPower(num, exponent) {
    return exponent === 0 ? 1 : num * toPower(num, exponent - 1);
}

console.log(toPower(2,3));
