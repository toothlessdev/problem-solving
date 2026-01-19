const fs = require("fs");
const isLinux = process.platform === "linux";

let input = fs
    .readFileSync(isLinux ? 0 : "./in.txt")
    .toString()
    .trim()
    .split("\n");

let cursor = 0;
let next = () => input[cursor++];

class MinHeap {
    constructor() {
        this.heap = [null];
    }
    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
    push(e) {
        this.heap.push(e);
        let idx = this.heap.length - 1;

        while (idx > 1) {
            let parent = Math.floor(idx / 2);

            if (this.heap[parent] > this.heap[idx]) {
                this.swap(parent, idx);
                idx = parent;
            } else break;
        }
    }
    pop() {
        if (this.heap.length === 1) return null;
        if (this.heap.length <= 2) return this.heap.pop();

        let element = this.heap[1];
        this.heap[1] = this.heap.pop();

        let idx = 1;

        while (true) {
            let left = idx * 2;
            let right = idx * 2 + 1;
            let target = idx;

            if (
                left < this.heap.length &&
                this.heap[left] < this.heap[target]
            ) {
                target = left;
            }
            if (
                right < this.heap.length &&
                this.heap[right] < this.heap[target]
            ) {
                target = right;
            }
            if (target === idx) {
                break;
            }
            this.swap(target, idx);
            idx = target;
        }

        return element;
    }
}

let tests = Number(next());

for (let t = 0; t < tests; t++) {
    let k = Number(next());

    let minHeap = new MinHeap();
    let ans = 0;

    next()
        .split(" ")
        .map(Number)
        .forEach((file) => minHeap.push(file));

    while (minHeap.heap.length > 2) {
        let e1 = minHeap.pop();
        let e2 = minHeap.pop();
        minHeap.push(e1 + e2);
        ans += e1 + e2;
    }

    console.log(ans);
    minHeap = null;
}
