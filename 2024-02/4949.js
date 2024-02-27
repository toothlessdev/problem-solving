const fs = require("fs");

let lines = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .split("\n");

function isBalanced(str) {
    let bracket = [];

    for (const char of str) {
        if (char === "(") {
            bracket.push("(");
        }
        if (char === ")") {
            if (bracket.length === 0) return false;
            if (bracket.at(-1) === "(") bracket.pop();
            else return false;
        }
        if (char === "[") {
            bracket.push("[");
        }
        if (char === "]") {
            if (bracket.length === 0) return false;
            if (bracket.at(-1) === "[") bracket.pop();
            else return false;
        }
    }

    if (bracket.length === 0) return true;
    return false;
}

lines.forEach((line) => {
    if (line === ".") process.exit(0);
    const str = line.split("");
    console.log(isBalanced(str) ? "yes" : "no");
});
