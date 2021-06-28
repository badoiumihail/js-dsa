// Helper Method Recursion - common design patter
function collectOddValues(arr) {
    // the basic concept is wrapping the recursion logic with another function,
    // in this case the helper method does the recursion task, and everything else,
    // in this case the result array, is in the wrapping function
    let result = [];

    // we use this helper method to avoid overwriting
    // the result array in the case in which the collectOddValues
    // function was implemented in a recursive way
    function helper(arr) {
        if (arr.length === 0) return;
        if (arr[0] % 2 !== 0) result.push(arr[0]);
        helper(arr.slice(1));
    }

    helper(arr);

    return result;
}

console.log(collectOddValues([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]));