function factorial(num) {
    // mhmmm yes, very smart one-liner kap
    return num === 0 ? 1 : num * factorial(num - 1);
}

console.log(factorial(0));
