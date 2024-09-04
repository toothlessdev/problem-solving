C = int(input())

def festival(N,L,cost):
    min_cost = float("inf")
    for i in range(N):
        total_cost = 0
        for j in range(i, N):
            total_cost += cost[j]
            if j - i + 1 >= L:
                avg_cost = total_cost / (j-i+1)
                min_cost = min(min_cost, avg_cost)
    return min_cost

for _ in range(C):
    N, L = map(int, input().split())
    cost = list(map(int, input().split()))
    answer = festival(N,L,cost)
    print(answer)