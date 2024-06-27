const fs = require("fs");

let [test, ...c] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

function getChange(money) {
    let $025 = Math.floor(money / 25);
    money -= $025 * 25;

    let $010 = Math.floor(money / 10);
    money -= $010 * 10;

    let $005 = Math.floor(money / 5);
    money -= $005 * 5;

    let $001 = Math.floor(money / 1);
    money -= $001 * 1;

    return [$025, $010, $005, $001];
}

c.forEach((change) => {
    console.log(getChange(change).join(" "));
});
