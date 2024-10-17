tests = int(input())

for _ in range(tests):
    N, L = map(int, input().split())
    costs = list(map(int,input().split()))

    min_avg_costs = float("inf")

    for begin in range(N):
        range_sum = 0
        for end in range(begin, N):
            range_sum += costs[end]

            if end - begin + 1 >= L:
                min_avg_costs = min(min_avg_costs, sum(costs[begin:end+1]) / (end - begin + 1))

    print(min_avg_costs)

