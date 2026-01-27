function largestSubgrid(grid, maxSum) {
    // Write your code here
    let max = 0;
    let maxGridSize = 0;

    for (let gridSize = 1; gridSize <= 4; gridSize++) {
        let sum = 0;
        for (let x = 0; x < grid.length - gridSize; x++) {
            for (let y = 0; y < grid.length - gridSize; y++) {
                sum += grid[x][y];
            }
        }
        if (sum <= maxSum && max < sum) {
            max = sum;
            maxGridSize = gridSize;
        }
    }
    return maxGridSize;
}
