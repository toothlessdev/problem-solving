linked = {
    0: [0,1,2],
    1: [3,7,9,11],
    2: [4,10,14,15],
    3: [0,4,5,6,7],
    4: [6,7,8,10,12],
    5: [0,2,14,15],
    6: [3,14,15],
    7: [4,5,7,14,15],
    8: [1,2,3,4,5],
    9: [3,4,5,9,13]
}

def isClockAligned(clocks):
    return not any(clocks)

def push(clocks, switch):
    for clock in linked[switch]:
        clocks[clock] = (clocks[clock] + 1) % 4

def clockSync(clocks, switch):
    if switch == 10:
        return 0 if isClockAligned(clocks) else INF
    else:
        ret = INF
        for cnt in range(4):
            ret = min(ret, cnt + clockSync(clocks, switch + 1))  
            push(clocks, switch)
        return ret


INF = 31

T = int(input())

for _ in range(T):
    clocks = [(int(x) // 3) % 4 for x in input().split()]
    result = clockSync(clocks, 0)
    print(result if result < INF else -1)
