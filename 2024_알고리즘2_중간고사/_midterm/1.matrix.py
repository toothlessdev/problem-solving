def hanoi_recursive(n, src, via, dst):
    if n == 1:
        print(src, dst)
    else:
        hanoi_recursive(n-1, src, dst, via)
        print(src, dst)
        hanoi_recursive(n-1, via, src, dst)

def hanoi_iterative(n, src, via, dst):
    stack = [(False, n, src, via, dst)]
    while stack:
        is_print, n, src, via, dst = stack.pop()
        if is_print:
            print(src, dst)
        elif n == 1:
            print(src, dst)
        else:
            stack.append((False, n-1, via, src, dst))
            stack.append((True, n, src, via, dst))
            stack.append((False, n-1, src, dst, via))

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