const fs = require("fs");

class Queue {
    constructor() {
        this.queue = Array(10).fill();
        this.begin = -1;
        this.end = -1;
    }

    isEmpty() {
        return this.begin === this.end;
    }

    push(n) {
        this.queue[++this.end] = n;
    }

    pop() {
        if (this.isEmpty()) return -1; // 또는 다른 특별한 값 사용
        return this.queue[++this.begin];
    }

    front() {
        if (this.isEmpty()) return -1; // 또는 다른 특별한 값 사용
        return this.queue[this.begin];
    }

    back() {
        if (this.isEmpty()) return -1; // 또는 다른 특별한 값 사용
        return this.queue[this.end];
    }

    size() {
        return this.end - this.begin + 1;
    }
}

const queue = new Queue();

let [n, ...commands] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

commands.forEach((command) => {
    let [cmd, arg] = command.split(" ");
    arg = Number(arg);
    // console.log(cmd, arg);

    switch (cmd) {
        case "push":
            queue.push(arg);
            break;
        case "pop":
            console.log(queue.pop());
            break;
        case "size":
            console.log(queue.size());
            break;
        case "empty":
            console.log(queue.isEmpty());
            break;
        case "front":
            console.log(queue.front());
            break;
        case "back":
            console.log(queue.back());
            break;
    }
});
