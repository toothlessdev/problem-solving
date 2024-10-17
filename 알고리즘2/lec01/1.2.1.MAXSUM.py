T = int(input())

for _ in range(T):
    N = int(input())
    arr = list(map(int,input().split()))

    prefix_sum = arr[:] + [0]
    for i in range(len(arr)):
        prefix_sum[i] = prefix_sum[i-1] + prefix_sum[i]

    max_sum = 0
    for begin in range(len(arr)):
        for end in range(begin, len(arr)):
            _sum = prefix_sum[end] - prefix_sum[begin-1]
            max_sum = _sum if _sum > max_sum else max_sum

    print(max_sum)
    