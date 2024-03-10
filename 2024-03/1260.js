const fs = require("fs");

let [metadata, ...edges] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

let [n, m, start] = metadata.split(" ").map(Number);

let edge = Array(n + 1)
    .fill()
    .map(() => []);

for (const e of edges) {
    let [from, to] = e.split(" ").map(Number);
    edge[from].push(to);
    edge[to].push(from);
}
edge = edge.map((e) => e.sort((e1, e2) => e1 - e2));

let isVisitedDFS = new Array(n + 1).fill(false);
let isVisitedBFS = new Array(n + 1).fill(false);

let dfsResult = [];
let bfsResult = [];

function DFS(node) {
    isVisitedDFS[node] = true;
    dfsResult.push(node);

    for (const n of edge[node]) {
        if (!isVisitedDFS[n]) {
            DFS(n);
        }
    }
}

function BFS(node) {
    let queue = new Array();

    isVisitedBFS[node] = true;
    queue.push(node);
    bfsResult.push(node);

    while (queue.length !== 0) {
        for (const n of edge[queue[0]]) {
            if (!isVisitedBFS[n]) {
                queue.push(n);
                isVisitedBFS[n] = true;
                bfsResult.push(n);
            }
        }
        queue.shift();
    }
}

DFS(start);
BFS(start);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
