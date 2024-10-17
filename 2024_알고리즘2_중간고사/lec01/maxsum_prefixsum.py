tests = int(input())

def max_sum(arr, N):
    max_sum = 0
    prefix_sum = arr[:] + [0]
    for i in range(N):
        prefix_sum[i] += prefix_sum[i-1]
    for begin in range(N):
        for end in range(begin, N):
            max_sum = max(max_sum, prefix_sum[end] - prefix_sum[begin-1])
    return max_sum


for _ in range(tests):
    N = int(input())
    arr = list(map(int, input().split()))

    print(max_sum(arr, N))