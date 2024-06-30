const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [test, ...tests] = fs.readFileSync(io).toString().trim().split("\n");

test = Number(test);

for (let line = 0; line < tests.length; line++) {
    let clothes = +tests[line];
    let names = [];
    let types = {};

    for (let cloth = 1; cloth <= clothes; cloth++) {
        let name = tests[line + cloth].split(" ")[0];
        let type = tests[line + cloth].split(" ")[1];

        names.push(name);

        if (Object.keys(types).includes(type)) types[type] += 1;
        else types[type] = 1;
    }

    // 여사건!
    console.log(Object.values(types).reduce((prev, curr) => prev * (curr + 1), 1) - 1);

    line += clothes;
}
