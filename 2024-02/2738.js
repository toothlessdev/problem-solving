const fs = require("fs");

let [size, ...matrix] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

size = size.split(" ").map(Number);

[n, m] = [size[0], size[1]];

let matrixA = [];
let matrixB = [];
let sum = Array.from({ length: n }, () => []);

for (let y = 0; y < n; y++) {
    matrixA.push(matrix[y].split(" ").map(Number));
}

for (let y = 0; y < n; y++) {
    matrixB.push(matrix[y + n].split(" ").map(Number));
}

for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
        sum[y][x] = matrixA[y][x] + matrixB[y][x];
    }
}

for (let y = 0; y < n; y++) {
    let line = "";
    for (let x = 0; x < m; x++) {
        line += sum[y][x] + " ";
    }
    console.log(line);
}
