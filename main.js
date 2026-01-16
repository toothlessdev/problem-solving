const fs = require("fs");
const isLocal = process.platform === "linux";

let input = fs
    .readFileSync(isLocal ? "/dev/stdin" : "./in.txt")
    .toString()
    .trim()
    .split("\n");

let cursor = 0;
let next = () => input[cursor++];

let m = Number(next());

let normalized = {
    origin: { x: -1, y: -1 },
    adjacent: [],
};

for (let i = 0; i < m; i++) {
    let [x, y] = next().split(" ").map(Number);

    if (i === 0) {
        normalized.origin = { x, y };
    } else {
        normalized.adjacent.push({
            x: x - normalized.origin.x,
            y: y - normalized.origin.y,
        });
    }
}

let n = Number(next());
let picture = new Set();

for (let i = 0; i < n; i++) {
    let [x, y] = next().split(" ").map(Number);
    picture.add(JSON.stringify({ x, y }));
}

for (const pic of picture) {
    let { x: picX, y: picY } = JSON.parse(pic);

    let isEqual = true;

    for (const adj of normalized.adjacent) {
        let adjX = adj.x;
        let adjY = adj.y;

        let x = picX + adjX;
        let y = picY + adjY;

        if (!picture.has(JSON.stringify({ x, y }))) {
            isEqual = false;
            break;
        }
    }

    if (isEqual) {
        console.log(picX - normalized.origin.x, picY - normalized.origin.y);
        break;
    }
}
