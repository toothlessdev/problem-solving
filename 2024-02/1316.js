const fs = require("fs");

let [, ...str] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

console.log(str);

// 체크한 단어가 또 나오면 그룹 단어 아님
function isGroupWord(word) {
    for (let i = 1; i < word.length; i++) {
        //
    }
}

console.log(isGroupWord("abbcbbb"));
