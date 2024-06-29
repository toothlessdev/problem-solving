const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [meta, ...input] = fs.readFileSync(io).toString().trim().split("\n");

let [n, m] = meta.split(" ");

input.slice(0, n);
