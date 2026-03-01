"use strict";
const fs = require("fs");
const isLocal = false;

let input = fs
    .readFileSync(isLocal ? "./in.txt" : 0)
    .toString()
    .trim()
    .split("\n")
    .slice(0, -1);

function isVowel(char) {
    return "aeiou".includes(char);
}

/**
 * @param {String} password
 */
function isGoodPassword(password) {
    if (!Array.from(password).some(isVowel)) return false;

    let vowelSequence = 0;
    let notVowelSequence = 0;

    for (let i = 0; i < password.length; i++) {
        const char = password[i];

        if (
            !(
                (password[i - 1] === "e" && password[i] === "e") ||
                (password[i - 1] === "o" && password[i] === "o")
            )
        ) {
            if (password[i - 1] === password[i]) return false;
        }

        if (isVowel(char)) {
            vowelSequence++;
            notVowelSequence = 0;
        } else {
            notVowelSequence++;
            vowelSequence = 0;
        }
        if (vowelSequence >= 3 || notVowelSequence >= 3) {
            return false;
        }
    }
    return true;
}

console.log(
    input
        .map(
            (password) =>
                `<${password}> is ${!isGoodPassword(password) ? "not " : ""}acceptable.`,
        )
        .join("\n"),
);
