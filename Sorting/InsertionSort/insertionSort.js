/**
 * InsertionSort
 * Builds up the sort by gradually creating a larger left half which is always sorted.
 */

// colt's solution
// worst case is quadratic time -> O(n^2), but if the data is almost sorted
// the best case scenario is O(n)
function insertionSort(arr) {

    // starting at index 1 because the first element
    // will always be used as the 'sorted' part
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        // extra conditional on the loop because if that evaluates to false there's no
        // reason to loop for the currentVal of that iteration
        for (var j = i - 1; j >= 0 && currentVal < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

exArr = [2, 1, 9, 76, 4];
console.log(insertionSort(exArr));
