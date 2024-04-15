/**
 * @param {Array} arr
 * @param {Number} start
 * @param {Number} mid
 * @param {Number} end
 */
function Merge(arr, start, mid, end) {
    let size1 = mid - start + 1;
    let size2 = end - mid;

    let sub1 = arr.slice(start, start + size1);
    let sub2 = arr.slice(mid + 1, mid + size2 + 1);

    sub1.push(Infinity);
    sub2.push(Infinity);

    let i = 0,
        j = 0;
    for (let index = start; index <= end; index++) {
        if (sub1[i] <= sub2[j]) {
            arr[index] = sub1[i];
            i++;
        } else {
            arr[index] = sub2[j];
            j++;
        }
    }
}

/**
 * @param {Array} arr
 */
function MergeSort(arr, start, end) {
    if (start < end) {
        let mid = parseInt((start + end) / 2);
        MergeSort(arr, start, mid);
        MergeSort(arr, mid + 1, end);
        Merge(arr, start, mid, end);
    }
}

let arr = [1, 6, 2, 5, 8, 9, 3, 10];
MergeSort(arr, 0, arr.length - 1);

console.log(arr);
