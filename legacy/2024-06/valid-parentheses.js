const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

const parentheses = fs.readFileSync(io).toString();

function isValid(str) {
    const stack = [];

    for (const char of str) {
        if ((stack.length === 0 && char === "]") || char === "}" || char === ")") {
            return false;
        }
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else if (char === ")" && stack.at(-1) === "(") {
            stack.pop();
        } else if (char === "}" && stack.at(-1) === "{") {
            stack.pop();
        } else if (char === "]" && stack.at(-1) === "[") {
            stack.pop();
        }
        console.log(stack);
    }
    return stack.length === 0;
}

console.log(isValid(parentheses));
