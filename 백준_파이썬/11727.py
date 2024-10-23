N = int(input())
dp = [-1 for _ in range(1001)]
dp[0] = 1
dp[1] = 1
dp[2] = 3


def tiling(N):
    global dp
    if dp[N] != -1:
        return dp[N]
    else:
        dp[N] = (tiling(N-1) + 2 * tiling(N-2)) % 10007
        return dp[N]
    
print(tiling(N))