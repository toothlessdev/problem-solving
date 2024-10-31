### 행렬 곱셈

```py
def mmult_recursive(A, B, C=None, i=0, j=0, k=0):
    if C is None:
        N, M = len(A), len(B[0])
        C = [[0] * M for _ in range(N)]
    if i >= len(A):
        return C
    if j >= len(B[0]):
        return mmult_recursive(A, B, C, i + 1, 0, 0)
    if k >= len(A[0]):
        return mmult_recursive(A, B, C, i, j + 1, 0)
    C[i][j] = (C[i][j] + (A[i][k] * B[k][j])) % MOD
    return mmult_recursive(A, B, C, i, j, k + 1)

def mmult_iterative(A, B):
    N, K, M = len(A), len(A[0]), len(B[0])
    C = [[0] * M for _ in range(N)]
    for i in range(N):
        for j in range(M):
            for k in range(K):
                C[i][j] = (C[i][j] + (A[i][k] * B[k][j])) % MOD
    return C
```

### 행렬 거듭제곱 문제

```py
def mpow(A, m):
    if m == 1:
        return A
    elif m == 0:
        return I(A)
    elif m % 2 == 1:
        return mmult(A, mpow(A,m-1))
    else:
        half = mpow(A, m//2)
        return mmult(half, half)
```

### 울타리 잘라내기

```py
def fence(h, left, right):
    if left == right:
        return h[left]
    else:
        mid = (left + right) / 2
        ret = max(fence(h, left, mid), fence(h, mid+1, right))
        return max(ret, largest_in_between(h, left, mid, right))

def largest_in_between(h, left, mid, right):
    low, high = mid = mid+1
    height = min(h[low], h[high])
    ret = height * 2
    while left < low or right > high:
        # 왼쪽의 다음 막대(h[low - 1])가 오른쪽의 다음 막대(h[high + 1])보다 작을 때, 오른쪽으로 확장합니다
        if high < right and (low == left or h[low - 1] < h[high + 1]):
            high += 1
            hight = min(height, h[high])
        else:
            low -= 1
            height = min(height, h[low])
        ret = max(ret, height * (high - low + 1))
    return ret
```

### 태뷸레이션 활용한 bin

```py
def bin(n, k):
    dp = [[-1] * (i+1) for i in range(n+1)]
    for i in range(n+1):
        for j in range(min(i,k) + 1):
            if j == 0 or j == i:
                dp[i][j] = 1
            else:
                dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
    return dp[n][k]
```

## 삼각형 최대 경로

```py
def path(y, x):
    global n, T
    if y == n-1: # 맨 아래 도착
        return Y[y][x]
    else:
        down = path(y+1, x)
        right = path(y+1, x+1)
        return T[y][x] + max(down, right)
```

```py
def path(n,T):
    dp = [[-1] * (i+1) for i in range(n)]
    dp[n-1] = T[n-1][:]

    for i in range(n-2, -1, -1):
        for j in range(i+1):
            dp[i][j] = T[i][j] + max(dp[i+1][j], dp[i+1][j+1])
    return dp[0][0]
```

```py
def path(n,T):
    dp = [[-1] * n for _ in range(2)]
    dp[(n-1) % 2] = T[n-1][:]
    for i in range(n-2, -1, -1):
        for j in range(i+1):
            dp[i%2][j] = T[i][j] + max(dp[(i+1) %2][j], dp[(i+1) %2][j+1])
    return dp[0][0]
```

```py
def path(n,T):
    dp = T[n-1][:]
    for i in range(n-2, -1,-1):
        for j in range(i+1):
            dp[j] = T[i][j] + max(dp[j], dp[j+1])
    return dp[0]
```

### 피보나치수

```py
def fibo(n):
    dp = [0,1]
    for _ in range(2, n+1):
        dp.append(dp[-1], dp[-2])
    return dp[n]

def fibo(n):
    if n <= 1:
        return n
    else:
        a,b = 0,1
        for _ in range(2, n+1):
            a,b = b, a+b
        return b

def fibo(n):
    if n <= 1:
        return n
    else:
        A = [[1,1], [1,0]]
        return mpow(A,n-1)[0][0]
```

```py
def tiling(n):
    if n <= 2:
        return n
    else:
        a,b = 1,2
        for _ in range(3, n+1):
            a,b= b,a+b
        return b % MOD

def tiling(n):
    if n <= 2:
        return n
    else:
        A = [[1,1][1,0]]
        return mpow(A,n)[0][0]
```

### 선수 출전

```py
def match(n, rus, kor):
    kor.sort()
    wins = 0
    for i in range(n):
        if kor[-1] < rus[i]:
            kor.pop(0)
        else:
            wins +=1
            kor.pop(bisect_left(kor, rus[i]))
    return wins
```

### 문자열 합치기

```py
def strjoin(strlen):
    heapify(strlen)
    ret = 0
    while len(strlen) > 1:
        len1 = heappop(strlen)
        len2 = heappop(strlen)
        heappush(strlen, len1 + len2)
        ret += len1 + len2
    return ret
```

```py
def decode(node, s, i, decoded):
    global root:
    if node.char != '+':
        decoded += [node.char]
        if i < len(s):
            decode(root, s, i, decoded)
    elif s[i] == "0":
        decode(node.left, s, i+1, decoded)
    else:
        decode(node.right, s, i+1, decoded)
```
