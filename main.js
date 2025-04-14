const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "./in.txt";

let [N, heights] = fs.readFileSync(io).toString().trim().split("\n");

N = Number(N);
heights = heights.split(" ").map(Number);

heights = heights.map((height, index) => ({
    index: index + 1,
    height,
}));

const stack = [heights[0]];
const answer = [0];

for (const { index, height } of heights) {
    if (index === 1) continue;

    const lastItem = stack[stack.length - 1];

    if (lastItem > height) {
        answer.push(lastItem.index);
        stack.push(lastItem);
    } else {
    }
}

console.log(heights);
