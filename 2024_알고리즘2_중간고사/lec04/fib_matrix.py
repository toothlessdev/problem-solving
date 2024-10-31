def fibo(n):
    if n <= 1:
        return n
    else:
        A = [[1,1],[0,0]]
        return mpow(A,n-1)[0][0]
    
def mat_mult(A, B):
    return [[A[0][0] * B[0][0] + A[0][1] * B[1][0], A[0][0] * B[0][1] + A[0][1] * B[1][1]],
        [A[1][0] * B[0][0] + A[1][1] * B[1][0], A[1][0] * B[0][1] + A[1][1] * B[1][1]]]

def mpow(A, n):
    if n == 1:
        return A
    if n % 2 == 0:
        half_pow = mpow(A, n // 2)
        return mat_mult(half_pow, half_pow)
    else:
        return mat_mult(A, mpow(A, n - 1))