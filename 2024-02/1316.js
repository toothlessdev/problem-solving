const fs = require("fs");

let [, ...str] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

console.log(str);

function isGroupWord(word) {
    let alphabet = [];
    let currentAlphabet = "";
    for (let i = 0; i < word.length; i++) {
        currentAlphabet = word[i];
        if (alphabet.includes(currentAlphabet)) {
            alphabet.push(currentAlphabet);
        } else {
        }
        //
    }
}
