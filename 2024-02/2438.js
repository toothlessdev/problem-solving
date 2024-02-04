let fs = require("fs");
let n = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt");

n = parseInt(n);

for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) {
        line += "*";
    }
    console.log(line);
}
