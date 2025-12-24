const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "./in.txt";

const heights = fs.readFileSync(io).toString().trim().split("\n").map(Number);

function solution(heights) {
    heights.sort((a, b) => a - b);

    const totalSum = heights.reduce((acc, cur) => acc + cur, 0);

    for (let i = 0; i < heights.length; i++) {
        for (let j = i + 1; j < heights.length; j++) {
            if (totalSum - heights[i] - heights[j] === 100) {
                heights.forEach((h, idx) => {
                    if (idx !== i && idx !== j) console.log(h);
                });
                return;
            }
        }
    }
}

solution(heights);
