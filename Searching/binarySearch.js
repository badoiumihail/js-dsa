// worst and average case of time complexity is logarithmic time O(log n)
function binarySearch(arr, num) {
    let start = 0,
        end = arr.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] > num) end = middle - 1;
        else if (arr[middle] < num) start = middle + 1;
        else return middle;
    }
    return -1;
}

// input data must be sorted
exArr = [1,2,3,4,5,6,7,8,9];
console.log(binarySearch(exArr, 5));
