const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let str = fs.readFileSync(io).toString().trim();

let dict = {};

// 문자열을 {char: count} 형식으로 저장
str.split("").forEach((char) => {
    if (!Object.keys(dict).includes(char)) dict[char] = 1;
    else dict[char] += 1;
});

let odd = [];
let even = [];
let palindrome = [];

// 짝수, 홀수 문자 분류
for (let [key, value] of Object.entries(dict)) {
    if (value % 2 === 1) odd.push([key, value]);
    else even.push([key, value]);
}

// 홀수 알파벳 개수가 1개 이상이면 팰린드롬 생성 불가
if (odd.length > 1) console.log("I'm Sorry Hansoo");
else {
    // 홀수 알파벳 존재시 1개를 빼서 짝수로 만든 뒤, even 배열에 push
    // 홀수 알파벳을 가운데 끼워넣어 사전순으로 만들기 위함!
    if (odd.length !== 0) even.push([odd[0][0], odd[0][1] - 1]);
    even.sort((e1, e2) => {
        if (e1[0] > e2[0]) return 1;
        else if (e1[0] < e2[0]) return -1;
        else return 0;
    });

    even.map(([key, value]) => {
        for (let repeat = 0; repeat < value / 2; repeat++) palindrome.push(key);
    });

    let front = [...palindrome];
    let back = palindrome.reverse();

    let result = [...front];

    if (odd.length !== 0) result.push(odd[0][0]);
    result = [...result, ...back];

    console.log(result.join(""));
}

/**
 * 반례!!
 * 홀수 문자열을 중앙에 모두 밀어넣는건 사전순이 아님!
 * 홀수 문자열에서 하나를 빼서 even 에넣고 가운데 하나 끼우는 식으로!
 */
