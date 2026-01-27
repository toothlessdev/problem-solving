def fence(h, left, right):
    if left == right:
        return h[left]
    else:
        mid = (left + right) // 2
        ret = max(fence(h, left, mid), fence(h, mid + 1, right))
        return max(ret, largest_in_between(h, left, mid, right))
    
def largest_in_between(h, left, mid, right):
    low, high = mid, mid + 1
    height = min(h[low], h[high]) # 둘중 작은것
    ret = height * 2

    while left < low or right > high: # 왼쪽과 오른쪽 끝까지
        if right > high and (left == low or h[low - 1] < h[high + 1]):
            high += 1
            height = min(height, h[high])
        else:
            low -= 1
            height = min(height, h[low])
        ret = max(ret, height * (high - low + 1))