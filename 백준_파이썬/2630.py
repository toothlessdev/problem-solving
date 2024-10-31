# NxN 을 N/2 x N/2 로 쪼갬 -> 총 4개의 부분이 나옴
# 해당 부분이 모두 1 또는 모두 0으로 채워져 있는지 확인한다
# if 모두 채워져 있으면 재귀를 종료하고, 개수를 더한다
# if 모두 채워져있지 않으면 해당 부분에 대해 쪼갠후 재귀를 계속한다

size = int(input())

arr = []
blue = 0
white = 0

for r in range(size):
    row = list(map(int, input().split()))
    arr.append(row)

def count(row_start, row_end, col_start, col_end):
    global arr
    flag = arr[row_start][col_start]
    for row in range(row_start, row_end):
        for col in range(col_start, col_end):
            if flag != arr[row][col]:
                return -1
    return flag

def divide(row_start, row_end, col_start, col_end):
    global arr, blue, white

    ret = count(row_start, row_end , col_start, col_end)
    # print(row_start, row_end, col_start, col_end)
    # print(ret)

    if ret == -1:
        mid_row = (row_start + row_end) // 2
        mid_col = (col_start + col_end) // 2

        # 좌측 상단
        divide(row_start, mid_row, col_start, mid_col)
        # 우측 상단
        divide(row_start, mid_row, mid_col, col_end)
        # 좌측 하단
        divide(mid_row, row_end, col_start, mid_col)
        # 우측 하단
        divide(mid_row, row_end, mid_col, col_end)

    
    if ret == 1:
        blue += 1
    elif ret == 0:
        white += 1


divide(0,size, 0, size)
print(white, blue)