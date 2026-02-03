"use strict";
const fs = require("fs");
const { exit } = require("process");
const isLocal = false;

class UnionFind {
    constructor(size) {
        this.parent = new Array(size).fill(0).map((_, idx) => idx);
    }
    find(node) {
        if (this.parent[node] === node) return node;
        return (this.parent[node] = this.find(this.parent[node]));
    }
    union(node1, node2) {
        let root1 = this.find(node1);
        let root2 = this.find(node2);

        if (root1 === root2) return false;

        this.parent[root1] = root2;
        return true;
    }
}

let input = fs
    .readFileSync(isLocal ? "./in.txt" : 0)
    .toString()
    .trim()
    .split("\n");

let _line = 0;
let nextline = () => input[_line++];

let [N, M] = nextline().split(" ").map(Number);
let uf = new UnionFind(N);

for (let m = 0; m < M; m++) {
    let [from, to] = nextline().split(" ").map(Number);
    if (!uf.union(from, to)) {
        console.log(m + 1);
        exit(0);
    }
}

console.log(0);
