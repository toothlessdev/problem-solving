const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [metadata, ...edges] = fs.readFileSync(io).toString().trim().split("\n");

let [node_size, edge_size] = metadata.split(" ").map(Number);

let graph = new Array(node_size).fill().map(() => []);
let isVisited = new Array(node_size).fill(0);

edges.forEach((edge) => {
    let [from, to] = edge.split(" ").map((e) => Number(e) - 1);

    graph[from].push(to);
    graph[to].push(from);
});

function DFS(node, group) {
    if (isVisited[node] !== 0) return;
    isVisited[node] = group;

    for (const adj of graph[node]) {
        if (isVisited[adj] === 0) {
            DFS(adj, group);
        }
    }
}

let group = 1;
for (let node = 0; node < node_size; node++) {
    if (isVisited[node] === 0) {
        DFS(node, group++);
    }
}

console.log(group - 1);
