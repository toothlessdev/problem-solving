const fs = require("fs");
const stdin = process.platform === "linux" ? "/dev/stdin" : "./in.txt";

let [n, ...arr] = fs
    .readFileSync(stdin)
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number);

class MinHeap {
    constructor() {
        this.heap = [null];
    }
    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
    push(element) {
        this.heap.push(element);

        let idx = this.heap.length - 1;

        while (idx !== 1) {
            let parent = Math.floor(idx / 2);

            if (this.heap[parent] > this.heap[idx]) {
                this.swap(parent, idx);
                idx = parent;
            } else {
                break;
            }
        }
    }
    pop() {
        if (this.heap.length === 1) return 0;
        if (this.heap.length === 2) return this.heap.pop();

        const element = this.heap[1];
        this.heap[1] = this.heap.pop();

        let idx = 1;

        while (true) {
            let left = idx * 2;
            let right = idx * 2 + 1;
            let min = idx;

            if (left < this.heap.length && this.heap[left] < this.heap[min]) {
                min = left;
            }
            if (right < this.heap.length && this.heap[right] < this.heap[min]) {
                min = right;
            }
            if (min === idx) {
                break;
            }

            this.swap(min, idx);
            idx = min;
        }
        return element;
    }
}

const minHeap = new MinHeap();
const ans = [];

for (const x of arr) {
    if (x === 0) ans.push(minHeap.pop());
    else minHeap.push(x);
}

console.log(ans.join("\n"));
