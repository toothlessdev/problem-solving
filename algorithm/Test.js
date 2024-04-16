/**
 * @param {Array} arr
 * @param {Number} node
 */
function MaxHeapify(arr, node) {
    let left = node * 2;
    let right = node * 2 + 1;
    let max = node;

    if (arr[left] < arr.length && arr[left] > arr[max]) max = left;
    if (arr[right] < arr.length && arr[right] > arr[max]) max = right;

    if (node !== max) {
        [arr[node], arr[max]] = [arr[max], arr[node]];
        MaxHeapify(arr, max);
    }
}

/**
 * @param {Array} arr
 */
function BuildMaxHeap(arr) {
    for (let node = Math.floor(arr.length); node >= 1; node--) {
        MaxHeapify(arr, node);
    }
}

let arr = [undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
BuildMaxHeap(arr);
console.log(arr);
