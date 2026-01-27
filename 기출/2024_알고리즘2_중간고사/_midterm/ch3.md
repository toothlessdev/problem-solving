### 행렬 거듭제곱 문제

```py
def mpow(A, m):
    if m == 1:
        return A
    elif m == 0:
        return I(A)
    elif m % 2 == 1:
        return mmult(A, mpow(A,m-1))
    else:
        half = mpow(A, m//2)
        return mmult(half, half)
```

### 울타리 잘라내기

```py
def fence(h, left, right):
    if left == right:
        return h[left]
    else:
        mid = (left + right) / 2
        ret = max(fence(h, left, mid), fence(h, mid+1, right))
        return max(ret, largest_in_between(h, left, mid, right))

def largest_in_between(h, left, mid, right):
    low, high = mid = mid+1
    height = min(h[low], h[high])
    ret = height * 2
    while left < low or right > high:
        if high < right and (low == left or h[low - 1] < h[high + 1]):
            high += 1
            hight = min(height, h[high])
        else:
            low -= 1
            height = min(height, h[low])
        ret = max(ret, height * (high - low + 1))
    return ret
```
