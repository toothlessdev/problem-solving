const fs = require("fs");

let [, ...position] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

let arr = Array.from({ length: 100 }, () => Array.from({ length: 100 }, () => 0));

position.forEach((pos) => {
    let [posX, posY] = pos.split(" ").map(Number);

    for (let y = posY; y < posY + 10; y++) {
        for (let x = posX; x < posX + 10; x++) {
            arr[y][x] += 1;
        }
    }
});

let area = 0;
for (let y = 0; y < 100; y++) {
    for (let x = 0; x < 100; x++) {
        if (arr[y][x] !== 0) area++;
    }
}

console.log(area);
