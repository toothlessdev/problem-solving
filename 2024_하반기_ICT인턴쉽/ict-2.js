// WA

const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const MOD = 1000000007;

let [size, ...arr] = fs.readFileSync(io).toString().split("\n").map(Number);

/**
 * @param {Number} n1
 * @param {Number} n2
 * @returns {Number}
 */
function power(n1, n2) {
    if (n1 === 1 || n2 === 0) return 1;
    if (n2 === 1) return n1 % MOD;

    const half = power(n1, Math.floor(n2 / 2)) % MOD;

    if (n2 % 2) return (((half * half) % MOD) * (n1 % MOD)) % MOD;
    return (half * half) % MOD;
}

/**
 * @param {number[]} arr
 */
function raisingPower(arr) {
    let powers = arr.map((_, index) => {
        if (index === arr.length - 1) return -1;
        return power(arr[index], arr[index + 1]);
    });

    let idx = 0;
    let max = powers[0];
    for (let index = 1; index < powers.length; index++) {
        if (max < powers[index]) {
            max = powers[index];
            idx = index;
        }
    }
    return idx + 1;
}

console.log(raisingPower(arr));
