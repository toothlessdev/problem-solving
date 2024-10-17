tests = int(input())

for _ in range(tests):
    N, L = map(int, input().split())
    costs = list(map(int,input().split()))

    prefix_sum = costs[:] + [0]
    for i in range(N):
        prefix_sum[i] += prefix_sum[i-1]
    
    min_avg_cost = float("inf")

    for begin in range(N):
        for end in range(begin, N):
            if end - begin + 1 >= L:
                avg_cost = (prefix_sum[end] - prefix_sum[begin-1]) / (end - begin +1)
                min_avg_cost = min(avg_cost, min_avg_cost)

    print(min_avg_cost)
