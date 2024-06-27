const arr = [8, 2, 4, 9, 3, 6];

/**
 * @param {Array} arr
 */
function InsertionSort(arr) {
    for (let j = 1; j < arr.length; j++) {
        let key = arr[j];
        let i = j - 1;
        while (i >= 0 && arr[i] > key) {
            arr[i + 1] = arr[i];
            i--;
        }
        arr[i + 1] = key;
    }
    return arr;
}

console.log(InsertionSort(arr));
