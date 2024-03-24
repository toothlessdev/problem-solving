const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let lines = fs.readFileSync(io).toString().trim().split("\n");

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

function BFS(map, width, height) {
    const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
    const dy = [-1, -1, -1, 0, 0, 1, 1, 1];

    let queue = new Queue();
    let isVisited = new Array(height).fill().map(() => new Array(width).fill(0));

    let island = 1;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (map[y][x] === 1 && isVisited[y][x] === 0) {
                queue.push({ x, y });
                isVisited[y][x] = island;
                island++;

                while (queue.size() !== 0) {
                    let current = queue.pop();
                    for (let dir = 0; dir < 8; dir++) {
                        let X = current.x + dx[dir];
                        let Y = current.y + dy[dir];
                        if (0 <= X && X < width && 0 <= Y && Y < height) {
                            if (isVisited[Y][X] === 0 && map[Y][X] === 1) {
                                queue.push({ x: X, y: Y });
                                isVisited[Y][X] = island;
                            }
                        }
                    }
                }
            }
        }
    }

    return island - 1;
}

for (let line = 0; line < lines.length; line++) {
    let [width, height] = lines[line].split(" ").map(Number);

    if (width === 0 && height === 0) break;

    let map = new Array();

    for (let y = 0; y < height; y++) {
        let mapx = lines[y + line + 1].split(" ").map(Number);
        map.push(mapx);
    }

    console.log(BFS(map, width, height));

    line += height;
}
