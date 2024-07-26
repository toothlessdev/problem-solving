const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [size, ...grids] = fs.readFileSync(io).toString().trim().split("\n");

let map = [];
let maxHeight = 0;

class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.back = 0;
    }
    push(e) {
        this.queue.push(e);
        this.back++;
    }
    pop() {
        return this.queue[this.front++];
    }
    size() {
        return this.back - this.front;
    }
}

grids.forEach((row) => {
    const rows = row.split(" ").map(Number);
    const max = Math.max(...rows);
    maxHeight = maxHeight > max ? maxHeight : max;
    map.push(rows);
});

function BFS(startX, startY, height, area, isVisited) {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const queue = new Queue();

    queue.push({ x: startX, y: startY });
    isVisited[startX][startY] = area;

    while (queue.size() !== 0) {
        const current = queue.pop();
        for (let dir = 0; dir < 4; dir++) {
            const newX = current.x + dx[dir];
            const newY = current.y + dy[dir];

            if (0 <= newX && newX < size && 0 <= newY && newY < size) {
                if (isVisited[newX][newY] === 0 && map[newX][newY] > height) {
                    isVisited[newX][newY] = area;
                    queue.push({ x: newX, y: newY });
                }
            }
        }
    }
}

function MaxArea(maxHeight) {
    let maxArea = 0;
    for (let height = maxHeight; height >= 0; height--) {
        let isVisited = new Array(+size).fill().map(() => new Array(+size).fill(0));
        let area = 1;
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                if (map[x][y] > height && isVisited[x][y] === 0) {
                    BFS(x, y, height, area++, isVisited);
                }
            }
        }
        maxArea = maxArea > area ? maxArea : area;
    }
    return maxArea - 1;
}

console.log(MaxArea(maxHeight));
