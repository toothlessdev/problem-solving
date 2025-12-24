module.exports = class MaxHeap {
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

            if (this.heap[parent] < this.heap[idx]) {
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
            let max = idx;

            if (left < this.heap.length && this.heap[left] > this.heap[max]) {
                max = left;
            }
            if (right < this.heap.length && this.heap[right] > this.heap[max]) {
                max = right;
            }
            if (idx === max) {
                break;
            }

            this.swap(idx, max);
            idx = max;
        }
        return element;
    }
};
