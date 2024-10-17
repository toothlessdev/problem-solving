from itertools import product


cover_types = [
    [(0, 0), (1, 0), (0, 1)],
    [(0, 0), (0, 1), (1, 1)],
    [(0, 0), (1, 0), (1, -1)],
    [(0, 0), (1, 0), (1, 1)]
]


def set_tile(board, H, W, y, x, type, delta):
    ok = True
    for dy, dx in cover_types[type]:
        ny, nx = y + dy, x + dx
        if ny < 0 or ny >= H or nx < 0 or nx >= W:
            ok = False
        else:
            board[ny][nx] += delta
            if board[ny][nx] > 1:
                ok = False
    return ok

def cover(board, H, W):
    y, x = find_white(board, H, W)
    
    if y == -1 and x == -1:
        return 1
    
    result = 0
    for type in range(4):
        if set_tile(board, H, W, y, x, type, 1):
            result += cover(board, H, W)
        set_tile(board, H, W, y, x, type, -1)
    
    return result

# 보드를 '#'과 '.'으로 받아서 0과 1로 변환하는 함수
def boardCover(H, W, board):
    board2 = [[0] * W for _ in range(H)]
    for i, j in product(range(H), range(W)):
        board2[i][j] = [0,1][board[i][j] == "#"]
    
    if(sum([row.count(0) for row in board2]) % 3 != 0):
        return 0
    else:
        return cover(board2, H, W)


def find_white(board, H, W):
    for i in range(H):
        for j in range(W):
            if board[i][j] == 0:
                return i,j
    return -1, -1


T = int(input())

for _ in range(T):
    H, W = map(int, input().split())
    board = [input() for _ in range(H)]
    print(boardCover(H, W, board))
