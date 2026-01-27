def trianglepath(n, T):
    dp = T[n-1][:]
    for i in range(n-2, -1, -1):
        for j in range(i+1):
            dp[j] = max(dp[j], dp[j+1]) + T[i][j]
    return dp[0]