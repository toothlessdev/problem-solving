/**
 * @param {Array} arr
 * @param {Number} node
 */
function MaxHeapify(arr, node) {
    let left = node * 2;
    let right = node * 2 + 1;
    let max = node;

    if (left < arr.length && arr[left] > arr[max]) max = left;
    if (right < arr.length && arr[right] > arr[max]) max = right;

    if (max !== node) {
        [arr[node], arr[max]] = [arr[max], arr[node]];
        MaxHeapify(arr, max);
    }
}

function BuildMaxHeap(arr) {
    for (let node = Math.floor(arr.length / 2); node >= 1; node--) {
        MaxHeapify(arr, node);
    }
}

// let arr = [undefined, 16, 4, 10, 14, 7, 0, 3, 2, 8, 1];
// MaxHeapify(arr, 2);

let arr = [undefined, 16, 4, 10, 14, 7, 9, 3, 2, 8, 1];
BuildMaxHeap(arr);

console.log(arr);
