const fs = require("fs");

let commands = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

class Stack {
    constructor() {
        this.stack = [];
    }
    push(element) {
        this.stack.push(element);
    }
    pop(element) {
        if (this.isEmpty()) return -1;
        return this.stack.pop();
    }
    size() {
        return this.stack.length;
    }
    isEmpty() {
        return Number(this.stack.length === 0);
    }
    top() {
        if (this.isEmpty()) return -1;
        return this.stack.at(-1);
    }
}

stack = new Stack(10000);

let result = "";
commands.forEach((command) => {
    let cmd = command.split(" ")[0];
    let args = Number(command.split(" ")[1]);

    switch (cmd) {
        case "push":
            stack.push(args);
            break;
        case "pop":
            result += stack.pop() + "\n";
            break;
        case "size":
            result += stack.size() + "\n";
            break;
        case "empty":
            result += stack.isEmpty() + "\n";
            break;
        case "top":
            result += stack.top() + "\n";
            break;
    }
});
console.log(result);

stack = null;
