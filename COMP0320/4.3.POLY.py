MOD = 10000000

def poly(n, first):
    global cache
    if n == first:
        return 1
    elif cache[n][first] != -1:
        return cache[n][first]
    else:
        ret = 0
        for second in range(1, n - first + 1):
            ret = (ret + (second + first - 1) * poly(n-first, second)) % MOD
        cache[n][first] = ret
        return cache[n][first]

for _ in range(int(input())):
    n = int(input())
    cache = [[-1] * (i+1) for i in range(n+1)]
    ret = 0
    for i in range(1, n+1):
        ret = (ret + poly(n,i)) % MOD
    print(ret)


