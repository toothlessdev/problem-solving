const fs = require("fs");
const stdin = process.platform === "linux" ? "/dev/stdin" : "./in.txt";

const NONE = 0;
const BODY = 1;
const APPLE = 2;

const DIRECTIONS = {
    UP: { y: -1, x: 0 },
    DOWN: { y: 1, x: 0 },
    LEFT: { y: 0, x: -1 },
    RIGHT: { y: 0, x: 1 },
};

let inputs = fs.readFileSync(stdin).toString().trim().split("\n");

let line = 0;
let n = +inputs[line++];
let k = +inputs[line++];

let board = Array.from({ length: n + 1 }).map(() =>
    new Array(n + 1).fill(NONE)
);

for (let i = 0; i < k; i++) {
    const [y, x] = inputs[line++].split(" ").map(Number);
    board[y][x] = APPLE;
}

let l = inputs[line++];
let commands = {};
for (let i = 0; i < l; i++) {
    const [time, dir] = inputs[line++].split(" ");
    commands[+time] = dir;
}

class Snake {
    constructor(mapSize) {
        this.direction = DIRECTIONS.RIGHT;
        this.body = [{ x: 1, y: 1 }];
        this.estimatedTime = 0;
        this.mapSize = mapSize;
        board[1][1] = BODY;
    }
    debug() {
        console.log(this.body);
    }
    move() {
        this.estimatedTime++;

        const { x, y } = this.body[0];
        const { x: dx, y: dy } = this.direction;

        const nx = x + dx;
        const ny = y + dy;

        if (!(1 <= nx && nx <= this.mapSize && 1 <= ny && ny <= this.mapSize)) {
            throw new Error();
        }
        if (board[ny][nx] === BODY) {
            throw new Error();
        }
        if (board[ny][nx] !== APPLE) {
            const tail = this.body.pop();
            board[tail.y][tail.x] = NONE;
        }
        this.body.unshift({ x: nx, y: ny });
        board[ny][nx] = BODY;
    }
    turnLeft() {
        switch (this.direction) {
            case DIRECTIONS.UP:
                this.direction = DIRECTIONS.LEFT;
                break;
            case DIRECTIONS.LEFT:
                this.direction = DIRECTIONS.DOWN;
                break;
            case DIRECTIONS.DOWN:
                this.direction = DIRECTIONS.RIGHT;
                break;
            case DIRECTIONS.RIGHT:
                this.direction = DIRECTIONS.UP;
                break;
        }
    }
    turnRight() {
        switch (this.direction) {
            case DIRECTIONS.UP:
                this.direction = DIRECTIONS.RIGHT;
                break;
            case DIRECTIONS.LEFT:
                this.direction = DIRECTIONS.UP;
                break;
            case DIRECTIONS.DOWN:
                this.direction = DIRECTIONS.LEFT;
                break;
            case DIRECTIONS.RIGHT:
                this.direction = DIRECTIONS.DOWN;
                break;
        }
    }
}

const snake = new Snake(n);

try {
    while (true) {
        snake.move();
        const time = snake.estimatedTime;
        if (commands[time] === "L") snake.turnLeft();
        if (commands[time] === "D") snake.turnRight();
    }
} catch {
    console.log(snake.estimatedTime);
}
