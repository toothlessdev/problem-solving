const fs = require("fs");
const isLinux = process.platform === "linux";

let str = fs
    .readFileSync(isLinux ? 0 : "./in.txt")
    .toString()
    .trim();

let stack = [];

function isPPAP() {
    if (stack.length < 4) return false;

    return (
        stack[stack.length - 4] === "P" &&
        stack[stack.length - 3] === "P" &&
        stack[stack.length - 2] === "A" &&
        stack[stack.length - 1] === "P"
    );
}

for (const char of str) {
    stack.push(char);

    if (isPPAP()) {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        stack.push("P");
    }
}

console.log(stack.join("") === "P" ? "PPAP" : "NP");
