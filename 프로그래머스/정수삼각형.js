function solution(triangle) {
    let height = triangle.length;
    let cache = triangle.map((row) => row.slice());

    for (let y = 1; y < height; y++) {
        for (let x = 0; x <= y; x++) {
            cache[y][x] += Math.max(
                cache[y - 1][x] ?? 0,
                cache[y - 1][x - 1] ?? 0,
            );
        }
    }

    return Math.max(...cache[height - 1]);
}
