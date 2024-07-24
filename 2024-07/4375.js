const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [...inputs] = fs.readFileSync(io).toString().trim().split("\n").map(BigInt);

for (const input of inputs) {
    let number = "";
    let digit = 1;
    while (true) {
        // MOD 연산의 성질
        number = BigInt(number + "1") % BigInt(input);
        digit++;
        if (number % input === 0n) {
            console.log(digit - 1);
            break;
        }
    }
}
