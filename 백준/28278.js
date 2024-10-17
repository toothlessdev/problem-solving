class Stack {
    stack = [];
    push(element) {
        this.stack.push(element);
    }
    pop() {
        if (this.isEmpty()) return -1;
        return this.stack.pop();
    }
    top() {
        if (this.isEmpty()) return -1;
        return this.stack[this.size() - 1];
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        return this.stack.length;
    }
}

const fs = require("fs");
let [, ...commands] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

const stack = new Stack();

let result = "";

commands.forEach((command) => {
    let [cmd, arg] = command.split(" ").map(Number);

    switch (cmd) {
        case 1:
            stack.push(arg);
            break;
        case 2:
            result += `${stack.pop()}\n`;
            break;
        case 3:
            result += `${stack.size()}\n`;
            break;
        case 4:
            result += `${Number(stack.isEmpty())}\n`;
            break;
        case 5:
            result += `${stack.top()}\n`;
            break;
    }
});

console.log(result);
