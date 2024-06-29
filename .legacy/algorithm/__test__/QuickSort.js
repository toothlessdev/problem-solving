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
