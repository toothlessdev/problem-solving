# if NxN 이 모두 동일한 것으로 채워져 있음 : 해당 숫자로 채움
# else : N/2 x N/2 로 분할 (4덩이)
#   반복


def fill(row_begin, row_end, col_begin, col_end):
    global arr
    flag = arr[row_begin][col_begin]
    for row in range(row_begin, row_end):
        for col in range(col_begin, col_end):
            if arr[row][col] != flag:
                return -1
    return flag

def divide(row_begin, row_end, col_begin, col_end):
    global arr

    filled = fill(row_begin, row_end, col_begin, col_end)

    row_mid = (row_begin + row_end) // 2
    col_mid = (col_begin + col_end) // 2

    if filled == -1:
        # 4사분면
        qt1 = divide(row_begin, row_mid, col_begin, col_mid)
        # 1사분면
        qt2 = divide(row_begin, row_mid, col_mid, col_end)
        # 3사분면
        qt3 = divide(row_mid, row_end, col_begin, col_mid)
        # 2사분면
        qt4 = divide(row_mid, row_end, col_mid, col_end)
        return f"({qt1}{qt2}{qt3}{qt4})"
    else:
        return str(filled)

size = int(input())
arr = []

arr = [input() for _ in range(size)]

print(divide(0, size, 0, size))