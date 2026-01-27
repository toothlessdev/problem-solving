from bisect import bisect_left

test = int(input())

for _ in range(test):
    N = int(input())
    russian = list(map(int,input().split()))
    korean = list(map(int,input().split()))

    korean.sort()
    win = 0
    for rus in russian:
        if rus > korean[-1]:
            korean.pop(0)
        else:
            win +=1
            korean.pop(bisect_left(korean, rus))
    print(win)