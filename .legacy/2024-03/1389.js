const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [metadata, ...relationships] = fs.readFileSync(io).toString().trim().split("\n");

let [node_size, edge_size] = metadata.split(" ").map(Number);
let graph = new Array(node_size).fill().map(() => []);

relationships.forEach((relationship) => {
    let [from, to] = relationship.split(" ").map((e) => Number(e) - 1);

    graph[from].push(to);
    graph[to].push(from);
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

function KevinBacon(node) {
    let isVisited = new Array(node_size).fill(0);
    let queue = new Queue();

    queue.push(node);
    isVisited[node] = 1;

    while (queue.size() !== 0) {
        let current = queue.pop();

        for (const adj of graph[current]) {
            if (isVisited[adj] === 0) {
                isVisited[adj] = isVisited[current] + 1;
                queue.push(adj);
            }
        }
    }

    return isVisited.reduce((prev, curr) => prev + (curr - 1)) - 1;
}

let arr = [];
for (let node = 0; node < node_size; node++) {
    arr.push({ node, sum: KevinBacon(node) });
}
arr.sort((e1, e2) => e1.sum - e2.sum);

console.log(arr[0].node + 1);
