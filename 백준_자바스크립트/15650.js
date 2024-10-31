const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "in.txt";

const [N, M] = fs.readFileSync(io).toString().trim().split(" ").map(Number);
