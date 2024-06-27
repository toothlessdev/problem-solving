const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

const [metadata, ...maps] = fs.readFileSync(io).toString().split("\n");

const [x_size, y_size] = metadata.split(" ").map(Number);
const maze = maps.map((row) => row.split("").map(Number));

class Queue {
    constructor() {
        
    }
}

function BFS() {
    let queue = [];
}

console.log(maze);
