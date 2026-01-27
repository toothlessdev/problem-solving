def trianglePath(y, x):
    global cache

    # 종료 조건 : 맨 아래에 도착한 경우
    if y == n-1:
        return T[y][x]
    elif cache[y][x] != -1:
        return cache[y][x]
    else:
        # 하단에서의 trianglePath
        down = trianglePath(y+1, x)
        # 우측하단에서의 trianglePath
        right = trianglePath(y+1, x+1)

        cache[y][x] = T[y][x] + max(down, right)
        return cache[y][x]

    

for _ in range(int(input())):
    n = int(input())
    cache = [[-1] * (i+1) for i in range(n)]

    T = [list(map(int, input().split())) for _ in range(n)]
    
    print(trianglePath(0,0))

