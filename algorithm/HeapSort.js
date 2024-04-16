/**
 * @param {Array} arr
 * @param {Number} node
 */
function MaxHeapify(arr, size, node) {
    let left = node * 2;
    let right = node * 2 + 1;
    let max = node;

    if (left < size && arr[left] > arr[max]) max = left;
    if (right < size && arr[right] > arr[max]) max = right;

    if (max !== node) {
        [arr[node], arr[max]] = [arr[max], arr[node]];
        MaxHeapify(arr, size, max);
    }
}

/**
 * @param {Array} arr
 */
function BuildMaxHeap(arr) {
    for (let node = Math.floor(arr.length / 2); node >= 1; node--) {
        MaxHeapify(arr, arr.length, node);
    }
}

/**
 * @param {Array} arr
 */
function HeapSort(arr) {
    BuildMaxHeap(arr);

    let size = arr.length;
    for (let node = arr.length - 1; node >= 2; node--) {
        [arr[1], arr[node]] = [arr[node], arr[1]];
        size--;
        MaxHeapify(arr, size, 1);
    }
}

let arr = [undefined, 9, 8, 7, 6, 5, 4, 3, 2, 1];
HeapSort(arr);

console.log(arr);
