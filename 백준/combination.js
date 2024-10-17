const arr = [1, 2, 3, 4, 5];

const n = 5;
const k = 3;
/**
 * @param {Number} start
 * @param {Array} selected
 */
function combination(start, selected) {
    if (selected.length === k) {
        let elements = [];
        selected.forEach((e) => elements.push(arr[e]));
        console.log(elements);
        return;
    }
    for (let index = start + 1; index < n; index++) {
        selected.push(index);
        combination(index, selected);
        selected.pop();
    }
}

combination(-1, []);
