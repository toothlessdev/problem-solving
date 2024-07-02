const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [t, pattern, ...tests] = fs.readFileSync(io).toString().trim().split("\n");

// console.log(t, pattern, tests);

function test(str) {
    const [begin, end] = pattern.split("*").map((p) => p.trim());
    if (begin.length + end.length > str.length) return false;
    return str.startsWith(begin) && str.endsWith(end);
}

tests.forEach((t) => {
    console.log(test(t) ? "DA" : "NE");
});

/**
 * 반례
 * pattern : ab*ab
 * test : ab (DA)
 */
