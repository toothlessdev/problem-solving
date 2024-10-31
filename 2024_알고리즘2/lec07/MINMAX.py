N = int(input())
nums = list(map(int, input().split()))
op = list(map(int, input().split()))

# print(nums)

min_val = float("inf")
max_val = float("-inf");

def minmax(idx, result):
    global nums, min_val, max_val

    if idx == N-1:
        min_val = min(min_val, result)
        max_val = max(max_val, result)
        return

    if op[0] > 0:
        op[0] -= 1
        minmax(idx+1, result + nums[idx+1])
        op[0] += 1

    if op[1] > 0:
        op[1] -= 1
        minmax(idx+1, result - nums[idx+1])
        op[1] +=1

    if op[2] > 0:
        op[2] -= 1
        minmax(idx+1, result * nums[idx+1])
        op[2] += 1

    if op[3] > 0:
        op[3] -= 1
        minmax(idx+1, int(result / nums[idx+1]))
        op[3] += 1
    

minmax(0, nums[0])
print(max_val, min_val)