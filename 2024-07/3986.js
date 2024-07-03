/**
 * AAABBAAA 있을때,
 * 연속되는 문자열 그룹으로 나눈다
 * AAA | BB | AAA
 * 홀 | 짝 | 홀
 * 1) 짝수그룹은 짝수그룹 내부에서 충돌없이 연결가능
 * 2) 홀수그룹은 인접한 홀수그룹끼리 이어야 함 (충돌발생가능)
 * -> 홀수그룹 만 있는 경우 (충돌, 맞는짝없음)
 * -> 홀수그룹이 짝수개 (o)
 * -> 홀수그룹이 홀수개 (x)
 */

const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [n, ...tests] = fs.readFileSync(io).toString().split("\n");

n = Number(n);

let t = tests[0];

for (let test of tests) {
    let groupIndex = 1;
    let oddGroupCount = 0;
    let evenGroupCount = 0;

    test = test.split("");

    for (let index = 1; index < test.length; index++) {
        let count = 0;
        if (test[index - 1] !== test[index]) {
            groupIndex++;
            if (count % 2 === 0) evenGroupCount++;
            else oddGroupCount++;
        } else {
            count++;
        }
    }
    console.log({ groupIndex, evenGroupCount, oddGroupCount });
}

/**
 * 오답노트
 * - 문제보고 아예 이해가 안될시 !!도식화!!
 * - 문제를 돌려보기!
 * - 문제를 반복해보기!
 *
 * 이문제의 경우 문제를 돌려보면
 * A
 * A
 * B
 * B
 * 같은 단어가 스택에 쌓여 있을때 소거!
 */
