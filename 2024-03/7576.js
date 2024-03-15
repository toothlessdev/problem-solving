const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

class Queue {
    constructor() {
        this.queue = [];
        this.begin = -1;
        this.end = -1;
    }
    push(element) {
        this.queue.push(element);
        this.end++;
    }
    pop() {
        return this.queue[++this.begin];
    }
    size() {
        return this.end - this.begin;
    }
}

let [metadata, ...matrix] = fs.readFileSync(io).toString().trim().split("\n");
let [x_size, y_size] = metadata.split(" ").map(Number);

let map = new Array();
let positions = new Array();

matrix.forEach((row) => {
    map.push(row.split(" ").map(Number));
});

for (let y = 0; y < y_size; y++) {
    for (let x = 0; x < x_size; x++) {
        if (map[y][x] === 1) {
            positions.push({ x, y });
        }
    }
}

function BFS(positions) {
    let day = 1;
    let queue = new Array();
    let isVisited = new Array(y_size).fill().map(() => new Array(x_size).fill(0));

    positions.forEach((position) => {
        queue.push({ x: position.x, y: position.y });
        isVisited[position.y][position.x] = 1;
    });

    while (queue.length !== 0) {
        let current = queue[0];

        for (let dir = 0; dir < 4; dir++) {
            let X = current.x + dx[dir];
            let Y = current.y + dy[dir];

            if (0 <= X && X < x_size && 0 <= Y && Y < y_size) {
                if (map[Y][X] !== -1 && isVisited[Y][X] === 0) {
                    queue.push({ x: X, y: Y });
                    isVisited[Y][X] = isVisited[current.y][current.x] + 1;
                    day = day > isVisited[Y][X] ? day : isVisited[Y][X];
                }
            }
        }
        queue.shift();
    }

    for (let y = 0; y < y_size; y++) {
        for (let x = 0; x < x_size; x++) {
            if (map[y][x] !== -1 && isVisited[y][x] === 0) return -1;
        }
    }

    return day - 1;
}

console.log(BFS(positions));

// https://www.acmicpc.net/board/view/138453
// [시간초과]
