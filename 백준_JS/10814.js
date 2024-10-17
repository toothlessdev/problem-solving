const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [n, ...users] = fs.readFileSync(io).toString().trim().split("\n");

users = users.map((user) => ({ age: +user.split(" ")[0], name: user.split(" ")[1] }));

users.sort((e1, e2) => {
    if (e1.age > e2.age) return 1;
    else if (e1.age < e2.age) return -1;
    else {
        if (e1.name - e2.name > 0) return -1;
        else return 1;
    }
});

console.log(users.map((user) => `${user.age} ${user.name}`).join("\n"));
