const fs = require("fs");
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt");

const score = Number(input);
let grade = "";

if (90 <= score && score <= 100) grade = "A";
else if (80 <= score && score <= 89) grade = "B";
else if (70 <= score && score <= 79) grade = "C";
else if (60 <= score && score <= 69) grade = "D";
else grade = "F";

console.log(grade);
