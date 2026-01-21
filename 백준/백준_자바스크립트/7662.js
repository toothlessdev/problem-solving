const fs = require("fs");
const isLinux = process.platform === "linux";

let input = fs
    .readFileSync(isLinux ? 0 : "./in.txt")
    .toString()
    .trim()
    .split("\n");

let cursor = 0;
let next = () => input[cursor++];

class Heap {
    constructor(compare) {
        this.heap = [null];
        this.compare = compare;
    }
    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
    push(e) {
        this.heap.push(e);
        let idx = this.heap.length - 1;

        while (idx > 1) {
            let parent = Math.floor(idx / 2);

            if (this.compare(this.heap[idx], this.heap[parent])) {
                this.swap(parent, idx);
                idx = parent;
            } else break;
        }
    }
    pop() {
        if (this.heap.length <= 1) return null;
        if (this.heap.length === 2) return this.heap.pop();

        let element = this.heap[1];
        this.heap[1] = this.heap.pop();

        let idx = 1;

        while (true) {
            let left = idx * 2;
            let right = idx * 2 + 1;
            let target = idx;

            if (
                left < this.heap.length &&
                this.compare(this.heap[left], this.heap[target])
            ) {
                target = left;
            }
            if (
                right < this.heap.length &&
                this.compare(this.heap[right], this.heap[target])
            ) {
                target = right;
            }
            if (idx !== target) {
                this.swap(idx, target);
                idx = target;
            } else break;
        }
        return element;
    }
    peek() {
        if (this.heap.length <= 1) return null;
        return this.heap[1];
    }
}

const minHeapCompareFn = (a, b) => a < b;
const maxHeapCompareFn = (a, b) => a > b;

let tests = Number(next());

for (let t = 0; t < tests; t++) {
    let minHeap = new Heap(minHeapCompareFn);
    let maxHeap = new Heap(maxHeapCompareFn);
    let elementCount = new Map();

    let ops = Number(next());

    while (ops--) {
        let [op, arg] = next().split(" ");
        arg = Number(arg);

        if (op === "I") {
            minHeap.push(arg);
            maxHeap.push(arg);
            elementCount.set(arg, (elementCount.get(arg) || 0) + 1);
        } else if (op === "D") {
            let targetHeap = arg === 1 ? maxHeap : minHeap;

            while (
                targetHeap.peek() !== null &&
                (elementCount.get(targetHeap.peek()) || 0) === 0
            ) {
                targetHeap.pop();
            }

            if (targetHeap.peek() !== null) {
                let val = targetHeap.pop();
                elementCount.set(val, elementCount.get(val) - 1);
            }
        }
    }

    while (
        maxHeap.peek() !== null &&
        (elementCount.get(maxHeap.peek()) || 0) === 0
    ) {
        maxHeap.pop();
    }
    while (
        minHeap.peek() !== null &&
        (elementCount.get(minHeap.peek()) || 0) === 0
    ) {
        minHeap.pop();
    }

    if (maxHeap.peek() === null || minHeap.peek() === null) {
        console.log("EMPTY");
    } else {
        console.log(`${maxHeap.peek()} ${minHeap.peek()}`);
    }
}
