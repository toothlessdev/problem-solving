const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [, ...lines] = fs.readFileSync(io).toString().trim().split("\n");

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

for (let line = 0; line < lines.length; line++) {
    let [x_size, y_size, p_size] = lines[line].split(" ").map(Number);

    let cabbagePositions = [];
    let positions = lines.slice(line + 1, line + p_size + 1);

    let map = new Array(y_size).fill().map(() => new Array(x_size).fill(0));
    let isVisited = new Array(y_size).fill().map(() => new Array(x_size).fill(0));

    positions.forEach((position) => {
        let [x, y] = position.split(" ").map(Number);
        cabbagePositions.push({ x, y });
        map[y][x] = 1;
    });

    let group = 1;
    cabbagePositions.forEach((position) => {
        if (isVisited[position.y][position.x] === 0) {
            BFS(position.x, position.y, map, isVisited, x_size, y_size, group);
            group++;
        }
    });

    console.log(group - 1);

    map = null;
    line += p_size;
}

function BFS(x, y, map, isVisited, x_size, y_size, group) {
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
                if (isVisited[Y][X] === 0 && map[Y][X] === 1) {
                    queue.push({ x: X, y: Y });
                    isVisited[Y][X] = group;
                }
            }
        }
    }
}
