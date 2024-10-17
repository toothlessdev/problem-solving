N, L = map(int, input().split())

arr = list(map(int, input().split()))
prefix_sum = arr[:] + [0]

for i in range(N):
    prefix_sum[i] += prefix_sum[i-1]

max_sum = float("-inf")

for idx in range(N):
    if idx + L - 1 < N:
        max_sum = max(prefix_sum[idx + L - 1] - prefix_sum[idx - 1], max_sum)
    
print(max_sum)