import math

tests = int(input())

for _ in range(tests):
    N, L = map(int, input().split())
    costs = list(map(int, input().split()))

    min_avg_cost = math.inf
    
    for begin in range(N):
        for end in range(begin, N):
            if end - begin + 1 >= L:
                avg_cost = sum(costs[begin:end+1]) / (end - begin + 1)
                min_avg_cost = min(avg_cost, min_avg_cost)
    
    print(min_avg_cost)

