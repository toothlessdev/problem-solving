def max_sum(arr, N):
    current_max_sum = 0
    max_sum = 0
    
    for i in range(N):
        current_max_sum = max(current_max_sum + arr[i], arr[i])
        max_sum = max(max_sum, current_max_sum)
    return max_sum


tests = int(input())

for _ in range(tests):
    N = int(input())
    arr = list(map(int,input().split()))
    
    print(max_sum(arr, N))
