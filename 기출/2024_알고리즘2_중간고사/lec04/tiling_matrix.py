def tiling(n):
    if n <= 2:
        return n
    else:
        A = [[1,1], [1,0]]
        return mpow(A,n)[0][0]
    
def mmult(A, B):
    N, K, M = len(A), len(A[0]), len(B[0])
    C = [[0] * M for _ in range(N)]
    for i in range(N):
        for j in range(M):
            for k in range(K):
                C[i][j] = (C[i][j] + (A[i][k] * B[k][j])) % MOD
    return C