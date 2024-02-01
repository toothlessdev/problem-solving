const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

const [hour, minute] = [...input];

const ans = {
    hour: 0,
    minute: 0,
};

if (minute >= 45) {
    ans.hour = hour;
    ans.minute = minute - 45;
} else {
    if (hour === 0) {
        ans.hour = 23;
        ans.minute = 60 + minute - 45;
    } else {
        ans.hour = hour - 1;
        ans.minute = 60 + minute - 45;
    }
}

console.log(`${ans.hour} ${ans.minute}`);
