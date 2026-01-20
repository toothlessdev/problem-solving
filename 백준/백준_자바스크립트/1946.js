const fs = require("fs");
const isLinux = process.platform === "linux";

let input = fs
    .readFileSync(isLinux ? 0 : "./in.txt")
    .toString()
    .trim()
    .split("\n");

let cursor = 0;
let next = () => input[cursor++];

let tests = Number(next());

for (let t = 0; t < tests; t++) {
    let N = Number(next());
    let apply = [];

    for (let n = 0; n < N; n++) {
        apply.push(next().split(" ").map(Number));
    }
    apply.sort((e1, e2) => e1[0] - e2[0]);

    let minInterviewRank = Infinity;

    let pass = apply.reduce((acc, cur) => {
        if (cur[1] < minInterviewRank) {
            minInterviewRank = cur[1];
            return acc + 1;
        }
        return acc;
    }, 0);

    console.log(pass);
}
