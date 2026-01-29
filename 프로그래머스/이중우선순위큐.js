const max = (a, b) => a > b;
const min = (a, b) => a < b;

class Heap {
    constructor(compare) {
        this.heap = [null];
        this.compare = compare;
    }
    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
    push(element) {
        this.heap.push(element);
        let idx = this.heap.length - 1;

        while (idx > 1) {
            let parent = Math.floor(idx / 2);

            if (this.compare(this.heap[idx], this.heap[parent])) {
                this.swap(idx, parent);
                idx = parent;
            } else break;
        }
    }
    pop() {
        if (this.heap.length === 1) return null;
        else if (this.heap.length <= 2) return this.heap.pop();

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
            if (target !== idx) {
                this.swap(idx, target);
                idx = target;
            } else break;
        }

        return element;
    }
    peek() {
        return this.heap[1];
    }
    isEmpty() {
        return this.heap.length === 1;
    }
}

function solution(operations) {
    let minHeap = new Heap(min);
    let maxHeap = new Heap(max);
    let count = new Map();

    function cleanTop(heap) {
        while (!heap.isEmpty()) {
            const x = heap.peek();
            if ((count.get(x) ?? 0) > 0) break;
            heap.pop();
        }
    }

    function inc(x) {
        count.set(x, (count.get(x) ?? 0) + 1);
    }
    function dec(x) {
        const v = (count.get(x) ?? 0) - 1;
        if (v <= 0) count.delete(x);
        else count.set(x, v);
    }

    operations.forEach((operation) => {
        let [op, arg] = operation.split(" ");
        arg = Number(arg);

        if (op === "I") {
            minHeap.push(arg);
            maxHeap.push(arg);

            if (count.has(arg)) count.set(arg, count.get(arg) + 1);
            else count.set(arg, 1);
        } else if (op === "D" && arg === 1) {
            cleanTop(maxHeap);
            const element = maxHeap.pop();
            if (element !== null) dec(element);
        } else if (op === "D" && arg === -1) {
            cleanTop(minHeap);
            const element = minHeap.pop();
            if (element !== null) dec(element);
        }
    });

    cleanTop(minHeap);
    cleanTop(maxHeap);

    if (count.size === 0) return [0, 0];
    return [maxHeap.peek(), minHeap.peek()];
}
