const io = process.platform === "linux" ? "/dev/stdin" : "in.txt";
const fs = require("fs");

let [size, ...rows] = fs.readFileSync(io).toString().trim().split("\n");
let blue = 0;
let white = 0;

size = +size;

const arr = rows.map((row) => row.split(" ").map(Number));

function count(row_begin, row_end, col_begin, col_end) {
    let flag = arr[row_begin][col_begin];

    for (let row = row_begin; row < row_end; row++) {
        for (let col = col_begin; col < col_end; col++) {
            if (flag !== arr[row][col]) {
                return -1;
            }
        }
    }
    return flag;
}

function divide(row_begin, row_end, col_begin, col_end) {
    let flag = count(row_begin, row_end, col_begin, col_end);

    if (flag === -1) {
        let row_mid = parseInt((row_begin + row_end) / 2);
        let col_mid = parseInt((col_begin + col_end) / 2);

        divide(row_begin, row_mid, col_begin, col_mid);

        divide(row_mid, row_end, col_begin, col_mid);

        divide(row_begin, row_mid, col_mid, col_end);

        divide(row_mid, row_end, col_mid, col_end);
    } else {
        if (flag === 0) white += 1;
        else blue += 1;
    }
}

divide(0, size, 0, size);
console.log(white, blue);
