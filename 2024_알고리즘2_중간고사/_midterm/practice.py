def mpow(A,m):
    if m == 1:
        return A
    elif m == 0:
        return I(A)
    elif m%2 == 1:
        return mmult(A, pow(A,m-1))
    else:
        half = mpow(A, m//2)
        return mmult(half, half)

def fence(h, L, R):
    if L == R:
        return h[L]
    else:
        mid = (L + R) /2
        # calc largest area between leftside right side
        ret = max(fence(h, L, mid), fence(h, mid+1, R))
        return max(ret, largest_in_between(h, left, mid, right))
    
def largest_in_between(h, l, m, r):
    l, h = mid , mid+1
    height = min(h[l], h[h])
    ret = h * 2
    while left < low or right > high:
        if high < right and ()

def bin(n,k):
    dp = [[-1] * (n+1) for i in range(n+1)]
    for i in range(n+1):
        for j in range(min(i,k) + 1):
            if j == 0 or j == i:
                dp[i][j] = 1
            else:
                dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
    return dp[n][k]