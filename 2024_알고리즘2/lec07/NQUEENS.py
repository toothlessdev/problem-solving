N = int(input())

count = 0
grid = [[False for _ in range(N)] for _ in range(N)]

def n_queens(col):
    global count
    if col == N:
        count += 1
        return
    
    for row in range(N):
        if is_available(row, col):
            grid[row][col] = True
            n_queens(col + 1)
            grid[row][col] = False

def is_available(row, col):
    for i in range(col):
        if grid[row][i]:
            return False

    i, j = row, col
    while i >= 0 and j >= 0:
        if grid[i][j]:
            return False
        i -= 1
        j -= 1

    i, j = row, col
    while i < N and j >= 0:
        if grid[i][j]:
            return False
        i += 1
        j -= 1

    return True

n_queens(0)
print(count)
