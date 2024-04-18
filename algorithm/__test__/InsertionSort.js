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
}

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
InsertionSort(arr);
console.log(arr);
