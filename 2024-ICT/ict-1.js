const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let skills = fs.readFileSync(io).toString().trim();

/**
 * @param {String} skills
 */
function perfectTeam(skills) {
    const map = {
        p: 0,
        c: 0,
        m: 0,
        b: 0,
        z: 0,
    };

    skills.split("").forEach((skill) => {
        map[skill] += 1;
    });

    return Object.values(map).reduce((prev, curr) => {
        return prev > curr ? curr : prev;
    });
}

console.log(perfectTeam(skills));
