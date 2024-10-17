const fs = require("fs");

let scores = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

// console.log(score);

function getGrade(score) {
    switch (score) {
        case "A+":
            return 4.5;
        case "A0":
            return 4;
        case "B+":
            return 3.5;
        case "B0":
            return 3;
        case "C+":
            return 2.5;
        case "C0":
            return 2;
        case "D+":
            return 1.5;
        case "D0":
            return 1;
        case "F":
            return 0;
    }
}

let sum = 0;
let count = 0;

scores.forEach((s) => {
    let score = s.split(" ")[2];
    let weight = Number(s.split(" ")[1]);

    if (score !== "P") {
        let grade = getGrade(score);
        sum += grade * weight;
        count += weight;
    }
});

console.log(sum / count);
