N, S = map(int , input().split())

arr = list(map(int, input().split()))
count = 0

def sum_of_subsets(idx, selected = []):
    global N, S, count, arr

    if sum(selected) == S and len(selected) > 0:
        count += 1
        
    if idx == N:
        return
    
    for i in range(idx, N):
        selected.append(arr[i])
        sum_of_subsets(i+1, selected)
        selected.pop()

sum_of_subsets(0, [])
print(count)