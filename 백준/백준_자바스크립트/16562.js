"use strict";
const fs = require("fs");
const isLocal = false;

let input = fs
    .readFileSync(isLocal ? "./in.txt" : 0)
    .toString()
    .trim()
    .split("\n");

let _cursor = 0;
let next = () => input[_cursor++];

class UnionFind {
    constructor(size, costs) {
        this.parent = Array.from({ length: size + 1 })
            .fill(null)
            .map((_, i) => i);
        this.costs = [Infinity, ...costs];
    }
    find(node) {
        if (this.parent[node] === node) return node;
        return (this.parent[node] = this.find(this.parent[node]));
    }
    union(node1, node2) {
        let root1 = this.find(node1);
        let root2 = this.find(node2);

        if (root1 === root2) return false;

        if (this.costs[root1] < this.costs[root2]) {
            this.parent[root2] = root1;
        } else {
            this.parent[root1] = root2;
        }
        return true;
    }
}

let [n, m, k] = next().split(" ").map(Number);
let costs = next().split(" ").map(Number);

let uf = new UnionFind(n, costs);

for (let i = 0; i < m; i++) {
    let [from, to] = next().split(" ").map(Number);
    uf.union(from, to);
}

let roots = new Set();
for (let i = 1; i <= n; i++) {
    roots.add(uf.find(i));
}

let sum = 0;
for (const r of roots) sum += uf.costs[r];

console.log(sum > k ? "Oh no" : sum);
