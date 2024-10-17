def festival(N,L,cost):
    psum = cost[:] + [0]
    for i in range(N):
        psum[i] += psum[i-1]
    min_cost = float("inf")

    for i in range(N):
        for j in range(i, N):
            if j - i + 1 >= L:
                avg_cost = (psum[j] - psum[i-1]) / (j-i+1)
                min_cost = min(min_cost, avg_cost)
    return min_cost

C = int(input())
for _ in range(C):
    N, L = map(int, input().split())
    cost = list(map(int, input().split()))
    answer = festival(N,L,cost)
    print(answer)