// very inefficient implementation of a fibonacci sequence
function fibLame(sequenceLen) {
    // handle invalid input
    if (sequenceLen < 0 || typeof sequenceLen !== 'number') throw `Incorrect input (${sequenceLen}).`;

    // edge case
    else if (sequenceLen === 0) return 0

    // base case
    else if (sequenceLen === 1 || sequenceLen === 2) return 1

    // recursion
    else return fibLame(sequenceLen - 1) + fibLame(sequenceLen - 2);
}

// implementation of fibonacci sequence using dynamic programming:

// MEMOISATION (TOP-DOWN STYLE)
function fibMem(sequenceLen, memo = []) {
    // handle invalid input
    if (sequenceLen < 0 || typeof sequenceLen !== 'number') throw `Incorrect input (${sequenceLen}).`;

    // memoisation technique, store the output of a subproblem that you know is going
    // to be reused in a data structure so that it won't be computed again
    if (memo[sequenceLen] !== undefined) return memo[sequenceLen];

    // edge case
    if (sequenceLen === 0) return 0

    // base case
    else if (sequenceLen === 1 || sequenceLen === 2) return 1

    // compute the result of each function call and store it into a variable
    let res = fibMem(sequenceLen - 1, memo) + fibMem(sequenceLen - 2, memo);

    // store the current call with its result in an object
    memo[sequenceLen] = res;

    // return the result of the current call if it wasn't stored in a previous call in the memo object
    return res;
}

// TABULATION (BOTTOM-UP STYLE)
// better with space complexity since we aren't filling up the callstack with function calls
function fibTab(sequenceLen) {
    // we don't need a base case since the first 3 elements
    // in the tab array are the base cases and the edge case
    // if (sequenceLen <= 2) return 1;

    // initialize tabulation array
    let tab = [0, 1, 1];

    for (let i = 3; i <= sequenceLen; i++) {
        // build up the array while iterating until sequenceLen
        tab[i] = tab[i - 1] + tab[i - 2];

        // side note: we don't need to specify the tab.length to be 'sequenceLen' beforehand since
        // in javascript the array is dynamically sized, so by accessing an out of range index and storing
        // something at said index we will increase the size dynamically
        // tab.push(tab[i - 1] + tab[i - 2]);
    }

    // return the result at the given number
    return tab[sequenceLen];
}

// input a number greater than 40 at your own risk
console.log(fibLame(10));

// you can literally input a number that will make the recursion overflow the stack
// or that will exceed the current largest number js can output (will show Infinity)
console.log(fibMem(3));

// since tabulation doesn't use recursion it won't produce a stack overflow
// but it's irrelevant (in this case) since both variants exceed the largest js number
console.log(fibTab(3));