
N = int(input())

# 첫째 행
arr = list(map(int, input().split()))
min_row = arr[:] 
max_row = arr[:]

for _ in range(N-1):
    arr = list(map(int, input().split()))

    cur_max_row = max_row[:]
    cur_min_row = min_row[:]

    for col in range(3):
        if col == 0:
            max_row[col] = max(cur_max_row[col], cur_max_row[col+1]) + arr[col]
            min_row[col] = min(cur_min_row[col], cur_min_row[col+1]) + arr[col]
        elif col == 2:
            max_row[col] = max(cur_max_row[col-1], cur_max_row[col]) + arr[col]
            min_row[col] = min(cur_min_row[col-1], cur_min_row[col]) + arr[col]
        else:
            max_row[col] = max(cur_max_row[col-1], cur_max_row[col], cur_max_row[col+1]) + arr[col]
            min_row[col] = min(cur_min_row[col-1], cur_min_row[col], cur_min_row[col+1]) + arr[col]

        
print(max(max_row))
print(min(min_row))