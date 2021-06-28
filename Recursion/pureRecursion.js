function collectOddValues(arr) {
    // pure recursion means no helper methods

    // create a new array to store the odd values in
    let newArr = [];

    // base case for recursion
    if (arr.length === 0) return newArr;

    // check if first element of the input array is odd and add it to newArr
    if (arr[0] % 2 !== 0) newArr.push(arr[0]);

    // recursively add the newArr from the current call to the previous one
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));
