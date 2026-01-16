const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    size() {
        if (this.queue[this.rear] === undefined) {
            return 0;
        } else {
            return this.rear - this.rear + 1;
        }
    }
    push(value) {
        if (this.size() === 0) {
            this.queue[0] = value;
        } else {
            this.rear += 1;
            this.queue[this.rear] = value;
        }
    }
    pop() {
        let temp;
        if (this.front === this.rear) {
            temp = this.queue[this.front];
            delete this.queue[this.front];
            this.front = 0;
            this.rear = 0;
        } else {
            temp = this.queue[this.front];
            delete this.queue[this.front];
            this.front += 1;
        }
        return temp;
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
    let queue = new Queue();
    let isVisited = new Array(y_size).fill().map(() => new Array(x_size).fill(0));

    positions.forEach((position) => {
        queue.push({ x: position.x, y: position.y });
        isVisited[position.y][position.x] = 1;
    });

    while (queue.size() !== 0) {
        let current = queue.pop();

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
