const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [, ...str] = fs.readFileSync(io).toString().trim().split("\n");

str.forEach((s) => {
    let reversed = [];
    let words = s.split(" ");

    words.forEach((word) => {
        reversed.push(Array.from(word).reverse().join(""));
    });
    console.log(reversed.join(" "));
});
