const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "in.txt";

const [N, M] = fs.readFileSync(io).toString().trim().split(" ").map(Number);

const isSelected = Array.from({ length: N }, () => false);

function backtrack(selected = []) {
    if (selected.length === M) {
        console.log(selected.join(" "));
        return;
    }

    for (let i = 1; i <= N; i++) {
        if (isSelected[i]) continue;

        isSelected[i] = true;

        selected.push(i);
        backtrack(selected);
        selected.pop();

        isSelected[i] = false;
    }
}

backtrack();
