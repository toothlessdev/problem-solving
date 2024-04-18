/**
 * @param {Array} arr
 * @param {Number} begin
 * @param {Number} end
 */
function QuickSort(arr, begin, end) {
    if (begin < end) {
        let pivot = Partition(arr, begin, end);
        QuickSort(arr, begin, pivot - 1);
        QuickSort(arr, pivot + 1, end);
    }
}

/**
 * @param {Array} arr
 * @param {Number} begin
 * @param {Number} end
 */
function Partition(arr, begin, end) {
    let pivotElement = arr[end];

    let lowerIndex = begin - 1;
    for (let index = begin; index < end; index++) {
        if (arr[index] <= pivotElement) {
            lowerIndex++;
            [arr[index], arr[lowerIndex]] = [arr[lowerIndex], arr[index]];
        }
    }
    [arr[lowerIndex + 1], arr[end]] = [arr[end], arr[lowerIndex + 1]];
    return lowerIndex + 1;
}

let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
QuickSort(arr, 0, arr.length - 1);
console.log(arr);
