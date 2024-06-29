const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [metadata, ...rectangles] = fs.readFileSync(io).toString().trim().split("\n");

let [y_size, x_size, k] = metadata.split(" ").map(Number);

let map = new Array(y_size).fill().map(() => new Array(x_size).fill(0));
let isVisited = new Array(y_size).fill().map(() => new Array(x_size).fill(0));

rectangles.forEach((rectangle) => {
    let [fromX, fromY, toX, toY] = rectangle.split(" ").map(Number);

    for (let y = fromY; y < toY; y++) {
        for (let x = fromX; x < toX; x++) {
            map[y][x] = 1;
        }
    }
});

class Queue {
    constructor() {
        this.queue = [];
        this.begin = 0;
        this.end = 0;
    }
    push(element) {
        this.queue.push(element);
        this.end++;
    }
    pop() {
        return this.queue[this.begin++];
    }
    size() {
        return this.end - this.begin;
    }
}

function BFS(x, y, group) {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    let queue = new Queue();

    queue.push({ x, y });
    isVisited[y][x] = group;

    while (queue.size() !== 0) {
        let { x, y } = queue.pop();

        for (let dir = 0; dir < 4; dir++) {
            let X = x + dx[dir];
            let Y = y + dy[dir];

            if (0 <= X && X < x_size && 0 <= Y && Y < y_size) {
                if (isVisited[Y][X] === 0 && map[Y][X] === 0) {
                    queue.push({ x: X, y: Y });
                    isVisited[Y][X] = group;
                }
            }
        }
    }
    queue = null;
}

let group = 1;
for (let y = 0; y < y_size; y++) {
    for (let x = 0; x < x_size; x++) {
        if (map[y][x] === 0 && isVisited[y][x] === 0) {
            BFS(x, y, group++);
        }
    }
}

let area = new Array(group).fill(0);
for (let y = 0; y < y_size; y++) {
    for (let x = 0; x < x_size; x++) {
        for (let g = 1; g < group; g++) {
            if (isVisited[y][x] === g) {
                area[g]++;
            }
        }
    }
}

area.shift();
area.sort((e1, e2) => e1 - e2);

console.log(group - 1);
console.log(area.join(" "));
