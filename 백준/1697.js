const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, k] = fs.readFileSync(io).toString().trim().split(" ").map(Number);

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
        return this.queue[this.begin++];
    }
    size() {
        return this.end - this.begin;
    }
}

let queue = new Queue();
let isVisited = new Array(100001).fill(0);

queue.push(n);
isVisited[n] = 1;

while (queue.size() !== 0) {
    let current = queue.pop();

    if (isVisited[current + 1] === 0) {
        queue.push(current + 1);
        isVisited[current + 1] = isVisited[current] + 1;
    }
    if (isVisited[current - 1] === 0) {
        queue.push(current - 1);
        isVisited[current - 1] = isVisited[current] + 1;
    }
    if (isVisited[current * 2] === 0) {
        queue.push(current * 2);
        isVisited[current * 2] = isVisited[current] + 1;
    }
}

console.log(isVisited[k] - 1);
