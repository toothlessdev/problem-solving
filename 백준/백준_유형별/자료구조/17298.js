const fs = require("fs");
const stdin = process.platform === "linux" ? "/dev/stdin" : "./in.txt";

let [n, ...arr] = fs
    .readFileSync(stdin)
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number);

class Stack {
    constructor() {
        this.stack = [];
    }
    push(element) {
        this.stack.push(element);
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    pop() {
        return this.stack.pop();
    }
    isEmpty() {
        return this.stack.length === 0;
    }
}

let nge = [];
let stack = new Stack();

for (let i = arr.length - 1; i >= 0; i--) {
    while (!stack.isEmpty() && stack.top() <= arr[i]) {
        stack.pop();
    }

    if (stack.isEmpty()) {
        nge.push(-1);
    } else {
        nge.push(stack.top());
    }

    stack.push(arr[i]);
}

console.log(nge.reverse().join(" "));
