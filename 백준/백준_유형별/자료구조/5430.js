const fs = require("fs");
const stdin = process.platform === "linux" ? "/dev/stdin" : "./in.txt";

class ACLang {
    constructor(arr, n) {
        this.arr =
            n === 0 ? [] : arr.trim().slice(1, -1).split(",").map(Number);
        this.begin = 0;
        this.end = this.arr.length - 1;
        this.isReversed = false;
        this.hasError = false;
    }

    reverse() {
        this.isReversed = !this.isReversed;
    }

    delete() {
        if (this.begin > this.end) {
            this.hasError = true;
            return;
        }

        if (this.isReversed) {
            this.end--;
        } else {
            this.begin++;
        }
    }

    print() {
        if (this.hasError) return "error";
        let out = this.arr.slice(this.begin, this.end + 1);
        if (this.isReversed) {
            out.reverse();
        }
        return "[" + out.join(",") + "]";
    }
}

let input = fs.readFileSync(stdin).toString().trim().split("\n");
let T = Number(input[0]);
let line = 1;

for (let t = 0; t < T; t++) {
    let cmds = input[line++];
    let n = Number(input[line++]);
    let arr = input[line++];

    const lang = new ACLang(arr, n);

    for (let cmd of cmds) {
        if (cmd === "R") lang.reverse();
        else if (cmd === "D") lang.delete();

        if (lang.hasError) break;
    }

    console.log(lang.print());
}
