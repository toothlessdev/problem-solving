const fs = require("fs");

let [, ...str] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

// 체크한 단어가 또 나오면 그룹 단어 아님
function isGroupWord(word) {
    let alphabet = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[i + 1]) {
            if (alphabet.includes(word[i])) return false;
            alphabet.push(word[i]);
        }
    }
    return true;
}

let count = 0;
str.forEach((s) => {
    if (isGroupWord(s)) count += 1;
});

console.log(count);
