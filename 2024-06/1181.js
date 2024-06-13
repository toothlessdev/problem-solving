const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [, ...words] = fs.readFileSync(io).toString().trim().split("\n");

console.log(
    Array.from(new Set(words))
        .sort((e1, e2) => {
            if (e1.length < e2.length) return -1;
            else if (e1.length > e2.length) return 1;
            else return e1.localeCompare(e2);
        })
        .join("\n")
);
