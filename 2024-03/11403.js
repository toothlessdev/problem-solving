const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...adjmatrix] = fs.readFileSync(io).toString().trim().split("\n");

let size = Number(n);
let matrix = new Array();

adjmatrix.forEach((adj) => {
    matrix.push(adj.split(" ").map(Number));
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
        return this.queue[this.begin++];
    }
    size() {
        return this.end - this.begin;
    }
}

function BFS(from) {
    let queue = new Queue();
    let isVisited = new Array(size).fill(0);

    queue.push(from);
    // isVisited[from] = 1;

    while (queue.size() !== 0) {
        let current = queue.pop();

        for (let adj = 0; adj < size; adj++) {
            if (matrix[current][adj] === 1 && isVisited[adj] === 0) {
                queue.push(adj);
                isVisited[adj] = 1;
            }
        }
    }

    return isVisited;
}

let isPathExist = new Array();

for (let from = 0; from < size; from++) {
    isPathExist.push(BFS(from));
}

const ans = isPathExist.reduce((prev, curr) => {
    return prev + curr.join(" ") + "\n";
}, "");

console.log(ans);
