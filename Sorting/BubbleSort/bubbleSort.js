/**
 * BubbleSort
 * > A sorting algorithm where the largest values bubble up to the top.
 */

// worst case - O(n^2), best case - O(n)
function bubbleSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        // variable used for optimizing the case in which the array is almost sorted
        let noSwaps = true;
        // at every iteration of the big loop we'll know the biggest element
        // from the remaining unsorted part of the array => the inner loop will
        // iterate until i - 1 since i decrements at every iteration by 1
        for (let j = 0; j <= i - 1; j++) {
            // if element at current index is greater than element at index + 1
            if (arr[j] > arr[j + 1]) {
                // swap the current two elements that we're comparing
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwaps = false;
            }
        }
        // if there were no swaps during a whole iteration of the main loop
        // that means the array is already sorted => break early without
        // finishing the rest of the main loop
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([98, 3, 1, 21, 11, 6, 2048, 0, 153, 4, -4, -99, 521]));