/**
 * QuickSort
 * > Like mergeSort, exploits the fact that arrays of 0 or 1 element are always sorted
 * > Works by selecting one element (called the 'pivot') and finding the index where the
 * pivot should end up in the sorted array.
 * > Once the pivot is positioned appropriately, quick sort can be applied on either side
 * of the pivot.
 */

// implementation from the pseudocode
function pivotHelper(arr, start = 0, end = arr.length - 1) {
    if (!arr) return 0;

    let pivot = arr[start],
        pivotIndex = start;

    // starting loop from 1 since the 1st element is the pivot
    for (let i = start + 1; i <= end; i++) {
        // if the pivot is greater than the current element
        if (pivot >= arr[i]) {
            // increment the index which at the end of the loop
            // tells us how many elements are less than the pivot
            pivotIndex++;

            // swap the elements that are less than the pivot with the elements
            // right after the pivot as to build them up in the first part of the array
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }

    // finally swap the pivot with the last element that is less than the pivot
    // as to divide the array in two halves, one half with elements that are less
    // than the pivot value, and one half with elements greater than the pivot value
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];

    // return the index in which the pivot was moved last time,
    // so the index of the element that divides the array
    return pivotIndex;
}

// colt's pivot() solution with better readability since we've used a dedicated swap function
function pivot(arr, start = 0, end = arr.length - 1) {
    // arrow function
    const swapElements = (arr, firstIndex, secondIndex) => {
        [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
    }

    let pivot = arr[start],
        swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot >= arr[i]) {
            swapIndex++;
            swapElements(arr, i, swapIndex);
        }
    }

    swapElements(arr, start, swapIndex);
    // console.log(`Pivoted arr: ${arr}`);

    return swapIndex;
}

// BigO - best case: O(n log n), worst case: O(n^2)
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        // console.log(`Arr: ${arr.slice(left, right + 1)}`);
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

// both the pivot functions modify the input array in-place so we need 2 identical examples
let exArr1 = [6, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11],
    exArr2 = [6, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11],
    arr = [5, 4, 3, 2, 1, 9, 8, 7, 6];
// console.log(pivotHelper(exArr1));
// console.log(pivot(exArr2));
console.log(quickSort(arr));
