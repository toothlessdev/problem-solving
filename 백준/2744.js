const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let str = fs.readFileSync(io).toString().trim();

let newStr = "";
Array.from(str).forEach((char) => {
    if ("a" <= char && char <= "z") newStr += char.toUpperCase();
    else if ("A" <= char && char <= "Z") newStr += char.toLowerCase();
});
console.log(newStr);
