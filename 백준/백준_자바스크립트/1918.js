const fs = require("fs");
const isLinux = process.platform === "linux";

let notation = fs
    .readFileSync(isLinux ? 0 : "./in.txt")
    .toString()
    .trim();

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const operators = [];
const operands = [];

const priority = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "(": 0,
};

function buildSubTree() {
    const op = operators.pop();
    const right = operands.pop();
    const left = operands.pop();

    const newNode = new Node(op);
    newNode.left = left;
    newNode.right = right;
    operands.push(newNode);
}

for (let char of notation) {
    if (/[A-Z]/.test(char)) operands.push(new Node(char));
    else if (char === "(") operators.push(char);
    else if (char === ")") {
        while (
            operators.length > 0 &&
            operators[operators.length - 1] !== "("
        ) {
            buildSubTree();
        }
        operators.pop();
    } else {
        while (
            operators.length > 0 &&
            priority[operators[operators.length - 1]] >= priority[char]
        ) {
            buildSubTree();
        }
        operators.push(char);
    }
}

while (operators.length > 0) buildSubTree();

const root = operands[0];

let result = "";
function postOrder(node) {
    if (!node) return;
    postOrder(node.left);
    postOrder(node.right);
    result += node.value;
}

postOrder(root);

console.log(result);
