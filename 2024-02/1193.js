const fs = require("fs");

let x = Number(
    fs
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
        .toString()
        .trim()
);

let line = 0,
    end = 0;

while (x > end) {
    line += 1;
    end += line;
}

let top, bottom;
if (!(line % 2)) {
    top = line - (end - x);
    bottom = end - x + 1;
} else {
    top = end - x + 1;
    bottom = line - (end - x);
}

console.log(`${top}/${bottom}`);
