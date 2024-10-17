const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [, ...commands] = fs.readFileSync(io).toString().trim().split("\n");

let queue = new Array();
let output = "";

commands.forEach((command) => {
    let cmd = command.split(" ")[0];
    let arg = +command.split(" ")[1];

    switch (cmd) {
        case "push":
            queue.push(arg);
            break;
        case "pop":
            output += queue.shift() + "\n";
            break;
        case "size":
            output += queue.length + "\n";
            break;
        case "empty":
            output += Number(queue.length === 0) + "\n";
            break;
        case "front":
            if (queue.length === 0) {
                output += "-1";
                break;
            }
            output += queue.at(0) + "\n";
            break;
        case "back":
            if (queue.length === 0) {
                output += "-1";
                break;
            }
            output += queue.at(-1) + "\n";
            break;
    }
});

console.log(output);
