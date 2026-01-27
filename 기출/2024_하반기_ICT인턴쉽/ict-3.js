const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const DIR = {
    UP: "UP",
    DOWN: "DOWN",
    LEFT: "LEFT",
    RIGHT: "RIGHT",
};

let position = { x: 0, y: 0 };
let direction = DIR.UP;

function runCommand(command) {
    switch (command) {
        case "G":
            if (direction === DIR.UP) position.y++;
            else if (direction === DIR.DOWN) position.y--;
            else if (direction === DIR.LEFT) position.x--;
            else if (direction === DIR.RIGHT) position.x++;
            break;
        case "L":
            if (direction === DIR.UP) direction = DIR.LEFT;
            else if (direction === DIR.DOWN) direction = DIR.RIGHT;
            else if (direction === DIR.LEFT) direction = DIR.DOWN;
            else if (direction === DIR.RIGHT) direction = DIR.UP;
            break;
        case "R":
            if (direction === DIR.UP) direction = DIR.RIGHT;
            else if (direction === DIR.DOWN) direction = DIR.LEFT;
            else if (direction === DIR.LEFT) direction = DIR.UP;
            else if (direction === DIR.RIGHT) direction = DIR.DOWN;
            break;
    }
    return `x:${position.x},y:${position.y}`;
}

function doesCircleExist(commands) {
    let ans = [];

    for (const command of commands) {
        let positions = [`x:${position.x},y:${position.y}`];

        for (let repeat = 0; repeat < 4; repeat++) {
            command.split("").forEach((cmd) => {
                runCommand(cmd);
            });
            positions.push(`x:${position.x},y:${position.y}`);
        }

        let removeOverlappedPositions = new Set(positions);

        if (positions.length > removeOverlappedPositions.size) ans.push("YES");
        else ans.push("NO");

        position = { x: 0, y: 0 };
    }
    return ans;
}

let commands = fs.readFileSync(io).toString().trim().split("\n");

console.log(doesCircleExist(commands));
