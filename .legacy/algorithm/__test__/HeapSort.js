function MaxHeapify(arr, size, index) {
    let left = index * 2;
    let right = index * 2 + 1;
    let max = index;

    if (left < size && arr[left] > arr[max]) max = left;
    if (right < size && arr[right] > arr[max]) max = right;

    if (max !== index) {
        [arr[max], arr[index]] = [arr[index], arr[max]];
        MaxHeapify(arr, size, max);
    }
}

function BuildMaxHeap(arr) {
    for (let index = Math.floor(arr.length / 2); index >= 1; index--) {
        MaxHeapify(arr, arr.length, index);
    }
}

function HeapSort(arr) {
    BuildMaxHeap(arr);
    let size = arr.length;
    for (let index = arr.length - 1; index >= 1; index--) {
        [arr[index], arr[1]] = [arr[1], arr[index]];
        MaxHeapify(arr, --size, 1);
    }
}

let arr = [undefined, 1, 6, 2, 5, 8, 9, 3, 10];
HeapSort(arr);

console.log(arr);
