def tiling(n):
    if n <= 2:
        return n
    else:
        a, b = 1, 2
        for _ in range(3, n+1):
            a, b = b, a + b
        return b % 1000000007

for _ in range(int(input())):
    n = int(input())
    print(tiling(n))