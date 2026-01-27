# 행렬 a 를 M 제곱한 결과를 반환한다.
def mpow(A,m):
    if m == 1:
        return A
    elif m == 0:
        return identity(A)
    elif m % 2 == 1: # if m is odd
        return mmult(A, mpow(A, m-1))
    else:
        half = mpow(A, m//2)
        return mmult(half, half)
