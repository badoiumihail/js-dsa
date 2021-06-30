function linearSearch(arr, num) {
    // this is called destructuring syntax ([index, element])
    for (const [index, element] of arr.entries())
        if (element === num) return index;
    return -1;
}

function linearSearchTwo(arr, num) {
    let result = null;
    arr.forEach((element, index) => {
        if (element === num) result = index;
    });
    return result === null ? -1 : result;
}

function linearSearchThree(arr, num) {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] === num) return i;
    return -1;
}

exArr = [1, 5, 2, 64, 32, 55, 321, 4, 21, 73, 7, 9, 0, 10, 205];
console.log(linearSearch(exArr, 321));
console.log(linearSearchTwo(exArr, 321));
console.log(linearSearchThree(exArr, 321));
