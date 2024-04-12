const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [from, to] = fs.readFileSync(io).toString().trim().split(" ").map(Number);

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

function BFS(from, to) {
    let queue = new Queue();

    queue.push({ node: from, weight: 1 });

    while (queue.size() !== 0) {
        let current = queue.pop();

        let multiply = current.node * 2;
        let add = Number(current.node + "1");

        if (add <= to) {
            queue.push({ node: add, weight: current.weight + 1 });
            if (add === to) return current.weight + 1;
        }

        if (multiply <= to) {
            queue.push({ node: multiply, weight: current.weight + 1 });
            if (multiply === to) return current.weight + 1;
        }
    }
    return -1;
}

console.log(BFS(from, to));
