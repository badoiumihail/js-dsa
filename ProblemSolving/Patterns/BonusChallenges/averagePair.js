/**
 * Statement:
 * > Write a function called averagePair. Given a sorted array of integers and a target average,
 * determine if there is a pair of values in the array where the average of the pair equals the
 * target average. There may be more than one pair that matches the average target.
 *
 * Bonus constraints:
 * Time: O(n)
 * Space O(1)
 *
 * Examples:
 * averagePair([1,2,3], 2.5) // true
 * averagePair([1,3,3,5,6,7,10,12,19], 8) // true
 * averagePair([-1,0,3,4,5,6], 4.1) // false
 * averagePair([], 4) // false
 */

// initial solution - had to look it up
function averagePair(arr, avg) {
    // checking if the array is empty, in which case return false
    if (!arr) {
        return false;
    }

    // initialize two pointers at the array's extremities
    let pointerOne = 0,
        pointerTwo = arr.length - 1;

    //  while the pointers don't cross
    while (pointerOne < pointerTwo) {
        // compute current average
        let currentAvg = (arr[pointerOne] + arr[pointerTwo]) / 2;
        // console.log(`avg = ${currentAvg}, leftValue = ${arr[pointerOne]}, rightValue ${arr[pointerTwo]}`)

        //  compare current average with target average
        if (currentAvg === avg) return true

        // if current average is less than the target average, shift the left pointer to right
        else if (currentAvg < avg) pointerOne++;

        // if current average is greater than the target average, shift the right pointer to left
        else pointerTwo--;
    }

    // return false if loop's condition expired
    return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
