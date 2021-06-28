/**
 * Statement:
 * > Write a function called fib which accepts a number and returns the nth number
 * in the Fibonacci sequence.
 */

function fib(n) {
    return n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
}

console.log(fib(10));
