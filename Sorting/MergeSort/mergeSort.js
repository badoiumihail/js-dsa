/**
 * MergeSort
 */

/**
 * Function that merges two sorted arrays into one big sorted array
 * @param {array} firstArr - sorted data
 * @param {array} secondArr - sorted data
 * @returns a sorted array composed of the two input arrays
 * @author Badoiu Mihail
 */
function mergeSortedArrays(firstArr, secondArr) {
    let mergedArr = [],
        i = 0,
        j = 0;

    while (i < firstArr.length && j < secondArr.length) {
        if (firstArr[i] < secondArr[j]) {
            mergedArr.push(firstArr[i]);
            i++;
        } else {
            mergedArr.push(secondArr[j]);
            j++;
        }
    }

    while (i < firstArr.length) {
        mergedArr.push(firstArr[i]);
        i++;
    }
    while (j < secondArr.length) {
        mergedArr.push(secondArr[j]);
        j++;
    }

    return mergedArr;
}

function mergeSort(arr) {
    // recursion base case
    if (arr.length <= 1) return arr;

    // recursively split the input array in smaller arrays until they have one or no elements.
    let leftArr = mergeSort(arr.slice(0, Math.floor(arr.length / 2))),
        rightArr = mergeSort(arr.slice(Math.floor(arr.length / 2)));

    // at every recursive step merge the sorted left and right arrays
    return mergeSortedArrays(leftArr, rightArr);

}


exArr = [1,43,2,12,62,102,5,0,42,13,17,79];
mergeSort(exArr);
