const io = process.platform === "linux" ? "/dev/stdin" : "in.txt";
const fs = require("fs");

let [size, ...arr] = fs.readFileSync(io).toString().trim().split("\n");

size = +size;
arr = arr.map((row) => row.split("").map(Number));

console.log(divide(0, size, 0, size));

function fill(row_begin, row_end, col_begin, col_end) {
    const flag = arr[row_begin][col_begin];
    for (let row = row_begin; row < row_end; row++) {
        for (let col = col_begin; col < col_end; col++) {
            if (flag !== arr[row][col]) return -1;
        }
    }
    return flag;
}

function divide(row_begin, row_end, col_begin, col_end) {
    let filled = fill(row_begin, row_end, col_begin, col_end);

    if (filled === -1) {
        let row_mid = parseInt((row_begin + row_end) / 2);
        let col_mid = parseInt((col_begin + col_end) / 2);

        let qt1 = divide(row_begin, row_mid, col_begin, col_mid);
        let qt2 = divide(row_begin, row_mid, col_mid, col_end);
        let qt3 = divide(row_mid, row_end, col_begin, col_mid);
        let qt4 = divide(row_mid, row_end, col_mid, col_end);
        return `(${qt1}${qt2}${qt3}${qt4})`;
    } else {
        return filled;
    }
}
