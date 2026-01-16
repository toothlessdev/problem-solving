// https://boj.kr/11286
const fs = require("fs");
const stdin = process.platform === "linux" ? "/dev/stdin" : "./in.txt";

class MinAbsHeap {
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

            let pVal = this.heap[parent];
            let cVal = this.heap[idx];

            if (
                Math.abs(pVal) > Math.abs(cVal) ||
                (Math.abs(pVal) === Math.abs(cVal) && pVal > cVal)
            ) {
                this.swap(idx, parent);
                idx = parent;
            } else {
                break;
            }
        }
    }
    pop() {
        if (this.heap.length <= 1) return 0;
        if (this.heap.length === 2) return this.heap.pop();

        const element = this.heap[1];
        this.heap[1] = this.heap.pop();

        let idx = 1;

        while (true) {
            let left = idx * 2;
            let right = idx * 2 + 1;
            let min = idx;

            if (left < this.heap.length) {
                if (
                    Math.abs(this.heap[left]) < Math.abs(this.heap[min]) ||
                    (Math.abs(this.heap[left]) === Math.abs(this.heap[min]) &&
                        this.heap[left] < this.heap[min])
                ) {
                    min = left;
                }
            }
            if (right < this.heap.length) {
                if (
                    Math.abs(this.heap[right]) < Math.abs(this.heap[min]) ||
                    (Math.abs(this.heap[right]) === Math.abs(this.heap[min]) &&
                        this.heap[right] < this.heap[min])
                ) {
                    min = right;
                }
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

let [n, ...arr] = fs
    .readFileSync(stdin)
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number);

const minAbsHeap = new MinAbsHeap();
const ans = [];

for (const x of arr) {
    if (x === 0) ans.push(minAbsHeap.pop());
    else minAbsHeap.push(x);
}

console.log(ans.join("\n"));
