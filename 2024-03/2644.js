const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, pair, ...relationships] = fs.readFileSync(io).toString().trim().split("\n");

let N = Number(n);
let [from, to] = pair.split(" ").map(Number);
let graph = new Array(N + 1).fill().map(() => new Array());

relationships.shift();
relationships.forEach((relationship) => {
    let [from, to] = relationship.split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);
});

// console.log(graph);

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
    let isVisited = new Array(N + 1).fill(0);

    queue.push(from);
    isVisited[from] = 1;

    while (queue.size() !== 0) {
        let current = queue.pop();

        for (const adj of graph[current]) {
            if (isVisited[adj] === 0) {
                isVisited[adj] = isVisited[current] + 1;
                queue.push(adj);
            }
        }
    }
    return isVisited[to] !== 0 ? isVisited[to] - 1 : -1;
}

console.log(BFS(from, to));
