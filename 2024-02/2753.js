const fs = require("fs");
const input = Number(fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt"));

console.log(Number((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0));
