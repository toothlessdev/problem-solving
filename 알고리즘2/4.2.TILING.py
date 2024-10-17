
# def tile(n):
#     global cache
#     if n == 1:
#         return 1
#     elif n == 2:
#         return 2
#     elif cache[n] != -1:
#         return cache[n]
#     else:
#         cache[n] = (tile(n-1) + tile(n-2)) % MOD
#         return cache[n]

MOD = 1000000007

def mmult(A,B):
    N,K,M = len(A), len(A[0]), len(B[0])
    C = [[0] * M for _ in range(N)]
    for i in range(N):
        for j in range(M):
            for k in range(K):
                C[i][j] = (C[i][j] + (A[k][i] * B[k][j])) % MOD
    return C

#def identity(A):
    #size = len(A)
  #  return [[1 if i == j else 0 for j in range(size)] for i in range(size)]

def mpow(A, m):
    if m == 1:
        return A
    elif m == 0:
        return [[1,0],[0,1]]
    elif m % 2 == 1:
        return mmult(A,mpow(A,m -1))
    else:
        half = mpow(A,m //2)
        return mmult(half,half)

def tiling(n):
    if n <= 2:
        return n
    else:
        A = [[1,1], [1,0]]
        return mpow(A,n)[0][0]


t = int(input())
for _ in range(t):
    n = int(input())
    
    print(tiling(n) % MOD)
