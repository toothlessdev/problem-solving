const fs = require("fs");
const stdin = process.platform === "linux" ? "/dev/stdin" : "./in.txt";

class Stack {
    constructor() {
        this.stack = [];
    }
    push(element) {
        this.stack.push(element);
    }
    pop() {
        return this.stack.pop();
    }
    top(d = 0) {
        if (this.isEmpty()) return undefined;
        return this.stack[this.stack.length - 1 - d];
    }
    isEmpty() {
        return this.stack.length === 0;
    }
}

let str = fs.readFileSync(stdin).toString().trim();
let stack = new Stack();

function getValue() {
    for (const char of str) {
        // console.log(stack);
        if (char === "(" || char === "[") {
            stack.push(char);
        } else if (char === ")") {
            if (stack.top() === "(") {
                // ()
                stack.pop();
                stack.push(2);
            } else if (
                // (N)
                typeof stack.top() === "number" &&
                stack.top(1) === "("
            ) {
                const n = stack.pop();
                stack.pop();
                stack.push(n * 2);
            } else {
                return 0;
            }
        } else if (char === "]") {
            if (stack.top() === "[") {
                // []
                stack.pop();
                stack.push(3);
            } else if (
                // [N]
                typeof stack.top() === "number" &&
                stack.top(1) === "["
            ) {
                const n = stack.pop();
                stack.pop();
                stack.push(n * 3);
            } else {
                return 0;
            }
        }

        while (
            // NM
            typeof stack.top() === "number" &&
            typeof stack.top(1) === "number"
        ) {
            stack.push(stack.pop() + stack.pop());
        }
    }

    for (const e of stack.stack) {
        if (e === "(" || e === "[") return 0;
    }

    return stack.stack.reduce((acc, cur) => acc + cur, 0);
}

console.log(getValue());
