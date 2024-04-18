/**
 * @param {Array} arr
 * @param {Number} begin
 * @param {Number} mid
 * @param {Number} end
 */
function Merge(arr, begin, mid, end) {
    let size1 = mid - begin + 1;
    let size2 = end - mid;

    let sub1 = arr.slice(begin, begin + size1);
    let sub2 = arr.slice(mid + 1, mid + 1 + size2);

    sub1.push(Infinity);
    sub2.push(Infinity);

    let i = 0,
        j = 0;
    for (let index = begin; index <= end; index++) {
        if (sub1[i] < sub2[j]) {
            arr[index] = sub1[i];
            i++;
        } else if (sub1[i] >= sub2[j]) {
            arr[index] = sub2[j];
            j++;
        }
    }
}

function MergeSort(arr, begin, end) {
    if (begin < end) {
        let mid = Math.floor((begin + end) / 2);
        MergeSort(arr, begin, mid);
        MergeSort(arr, mid + 1, end);
        Merge(arr, begin, mid, end);
    }
}

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
MergeSort(arr, 0, arr.length - 1);
console.log(arr);
