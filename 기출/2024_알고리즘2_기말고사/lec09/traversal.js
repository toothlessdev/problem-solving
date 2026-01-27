const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "in.txt";

const [_, ...tests] = fs.readFileSync(io).toString().trim().split("\n");
let result = [];
function print(...args) {
    console.log(...args);
}

/**
 *
 * @param {Array<Number>} preOrder
 * @param {Array<Number>} inOrder
 */
function postOrder(preOrder, inOrder) {
    // preOrder, inOrder 가 빈경우 === 서브트리가 형성되지 않음.
    if (preOrder.length === 0 || inOrder.length === 0) return;

    // preOrder[0] = 서브트리의 루트노드
    const rootNode = preOrder[0];
    const rootNodeIndex = inOrder.findIndex((value) => value === rootNode);

    // 왼쪽 서브트리 순회
    postOrder(preOrder.slice(1, preOrder.length), inOrder.slice(0, rootNodeIndex));
    // 오른쪽 서브트리 순회
    postOrder(preOrder.slice(rootNodeIndex + 1, preOrder.length), inOrder.slice(rootNodeIndex + 1, preOrder.length));
    result.push(rootNode);
}

for (let test = 0; test < tests.length; test += 3) {
    const [nodes, preOrder, inOrder] = [+tests[test], tests[test + 1].split(" ").map(Number), tests[test + 2].split(" ").map(Number)];

    postOrder(preOrder, inOrder);
    print(result.join(" "));
    result = [];
}
