def packing(i, cap):
    global n, w, p, cache
    if i == n or cap <= 0:
        return 0
    elif cache[i][cap] != -1:
        return cache[i][cap]
    else:
        pick = packing(i+1, cap - w[i])
        drop = packing(i+1, cap)
        cache[i][cap] = drop if cap < w[i] else max(drop, p[i] + pick)
        return cache[i][cap]
    
def reconstruct(i, c):
    global n, items, w
    if i == n:
        return []
    elif packing(i, c) == packing(i+1, c):
        return reconstruct(i+1, c)
    else:
        return [items[i][0]] + reconstruct(i+1, c-w[i])
    

for _ in range(int(input(()))):
    n, W = map(int, input().split())
    items = [input().split() for _ in range(n)]
    w = [int(items[i][1]) for i in range(n)]
    p = [int(items[i][2] for i in range(n))]
    
    cache = [[-1] * (W+1) for _ in range(n+1)]
    optval = packing(0, W)
    optsol = reconstruct(0, W)

