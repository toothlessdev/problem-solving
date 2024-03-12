function SelectionSort(arr, size) {
    for (let i = 0; i < size - 1; i++) {
        let idx = i;
        for (let j = i + 1; j < size; j++) {
            if (arr[idx] > arr[j]) idx = j;
        }
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
}
