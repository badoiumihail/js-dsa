/**
 * SelectionSort
 * > Similar to bubble sort, but instead of first placing large values into
 * sorted position, it places small values into sorted position.
 */

// quadratic time O(n^2)
// initial solution
function mySelectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        // the dumb thing from my part was that I've stored the actual value in the min variable
        // and also the index when I could've just used the index like Colt did
        let [min, index] = [arr[i], i];
        for (let j = i + 1; j < arr.length; j++)
            if (min > arr[j]) [min, index] = [arr[j], j]
        if (i !== index) [arr[i], arr[index]] = [arr[index], arr[i]]
    }
    return arr;
}

// colt's solution, pretty similar but much better from a readability stand point
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++)
            if (arr[j] < arr[lowest]) lowest = j;
        if (lowest !== i) [arr[lowest], arr[i]] = [arr[i], arr[lowest]];
    }
    return arr;
}

console.log(mySelectionSort([5, 4, 0, 2, 1, -3]));
console.log(selectionSort([5, 4, 0, 2, 1, -3]));
