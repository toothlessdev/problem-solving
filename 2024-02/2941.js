const fs = require("fs");

const alphabet = ["c=", "c-", "d-", "lj", "nj", "s=", "z="];
let str = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim();

let count = 0;

for (let i = 0; i < str.length; i++) {
    for (const word of alphabet) {
        if (str.substring(i, i + 2) === word) {
            console.log(str.substring(i, i + 2), word);
            str = str.replace(word, "");
            count++;
        }
    }
}

console.log(str);

console.log(count + str.length);
