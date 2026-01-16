N = int(input())

arr = list(map(int,input().split()))

max_sum = float("-inf") 
cur_sum = float("-inf") # 이때까지 최대 합

for i in range(N):
    cur_sum = max(arr[i], cur_sum + arr[i]) # 이때까지 최대합 + 요소 추가 vs 이때까지 최대합
    max_sum = max(max_sum, cur_sum)

print(max_sum)