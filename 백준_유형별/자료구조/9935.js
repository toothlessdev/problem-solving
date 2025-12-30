const fs = require("fs");
const stdin = process.platform === "linux" ? "/dev/stdin" : "./in.txt";

let [string, trigger] = fs.readFileSync(stdin).toString().trim().split(/\s+/);

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
    top() {
        return this.stack[this.stack.length - 1];
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    clear() {
        this.stack = [];
    }
}

const stack = new Stack();

for (const char of string) {
    stack.push(char);

    if (stack.stack.length >= trigger.length) {
        let isMatch = true;
        for (let j = 0; j < trigger.length; j++) {
            if (
                stack.stack[stack.stack.length - trigger.length + j] !==
                trigger[j]
            ) {
                isMatch = false;
                break;
            }
        }

        if (isMatch) {
            for (let j = 0; j < trigger.length; j++) {
                stack.pop();
            }
        }
    }
}

console.log(stack.stack.join("") || "FRULA");
