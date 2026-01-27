tests = int(input())

for _ in range(tests):
    N = int(input())
    triangle = [[0]*N for _ in range(N)]
    
    for row in range(N):
        triangle[row] = list(map(int,input().split()))
    
    
    dp = [[0]*N for _ in range(N)]
    dp[0][0] = triangle[0][0]

    for row in range(len(triangle)):
        for col in range(len(triangle[row])):
            if col == 0:
                dp[row][col] = dp[row-1][col] + triangle[row][col]
            elif col == len(triangle[row]) - 1:
                dp[row][col] = dp[row-1][col-1] + triangle[row][col]
            else:
                dp[row][col] = max(dp[row-1][col], dp[row-1][col-1]) + triangle[row][col]

    print(max(dp[N-1]))