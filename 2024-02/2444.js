const fs = require("fs");
let n = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt");

n = Number(n);

for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n - 1 - i; j++) {
        str += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        str += "*";
    }
    console.log(str);
}

for (let i = 1; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i - 1; j++) {
        str += " ";
    }
    for (let k = 0; k < 2 * (n - i) - 1; k++) {
        str += "*";
    }
    console.log(str);
}

// for (let i = n - 1; i < 2 * n; i++) {
//     let str = "";
//     for (let j = 0; j <= n - i; i++) {
//         str += "*";
//     }
//     // str += "*";
//     console.log(str);
// }
