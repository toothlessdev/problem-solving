const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [test, ...inputs] = fs.readFileSync(io).toString().trim().split("\n");

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

function BFS(size, fromX, fromY, toX, toY) {
    const dx = [-1, 1, 2, 2, 1, -1, -2, -2];
    const dy = [-2, -2, -1, 1, 2, 2, 1, -1];

    let queue = new Queue();
    let isVisited = new Array(size).fill().map(() => new Array(size).fill(0));

    queue.push({ x: fromX, y: fromY });
    isVisited[fromY][fromX] = 1;

    while (queue.size() !== 0) {
        let { x, y } = queue.pop();

        for (let dir = 0; dir < 8; dir++) {
            let X = x + dx[dir];
            let Y = y + dy[dir];
            if (0 <= X && X < size && 0 <= Y && Y < size) {
                if (isVisited[Y][X] === 0) {
                    isVisited[Y][X] = isVisited[y][x] + 1;
                    queue.push({ x: X, y: Y });
                }
            }
        }
    }
    return isVisited[toY][toX] - 1;
}

let ans = [];
for (let t = 1; t <= test; t++) {
    let input = inputs.slice(3 * (t - 1), 3 * t);

    let size = Number(input[0]);
    let [currentX, currentY] = input[1].split(" ").map(Number);
    let [moveX, moveY] = input[2].split(" ").map(Number);

    ans.push(BFS(size, currentX, currentY, moveX, moveY));
}

console.log(ans.join("\n"));
