const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...lines] = fs.readFileSync(io).toString().trim().split("\n");

let size = Number(n);
let map = new Array(size).fill().map(() => []);

lines.forEach((line, row) => {
    map[row] = line.split(" ").map(Number);
});

class Queue {
    constructor() {
        this.queue = [];
        this.begin = 0;
        this.end = 0;
    }
    push(element) {
        this.queue.push(element);
        this.end++;
    }
    pop() {
        return this.queue[++this.begin];
    }
    size() {
        return this.end - this.begin;
    }
}
function BFS(x, y) {
    let queue = new Queue();
    let isVisited = new Array(size).fill().map(() => new Array(size).fill(false));
}

console.log(map);
