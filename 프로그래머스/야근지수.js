function solution(n, works) {
    works.sort((a, b) => b - a);

    const m = works.length;
    const sum = works.reduce((acc, v) => acc + v, 0);

    if (sum <= n) return 0;

    let k = 1;

    while (k < m) {
        const diff = works[k - 1] - works[k];
        const cost = diff * k;

        if (cost <= n) {
            for (let i = 0; i < k; i++) works[i] -= diff;
            n -= cost;
            k += 1;
        } else {
            break;
        }
    }

    if (n > 0) {
        const q = Math.floor(n / k);
        const r = n % k;

        for (let i = 0; i < k; i++) works[i] -= q;
        for (let i = 0; i < r; i++) works[i] -= 1;
    }

    let ans = 0;
    for (const w of works) {
        const x = w < 0 ? 0 : w;
        ans += x * x;
    }
    return ans;
}
/**
 * 큰 works 부터 k 개 묶어서 다음 작업 높이까지 한번에 깎음
 * 6 5 3 2 1 인 경우
 * 5 5 3 2 1
 * 3 3 3 2 1 ...
 * 대충이런식
 * 더 못깎는 순간 n 을 k 개에 균등분배
 */
