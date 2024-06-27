# 순열

순서를 고려하여 뽑는 경우

예) 순서를 재배치 하여 ~ <br/>
예) ~ 한 순서의 경우 ~

$$\ _nP_k = \frac{n!}{(n-r)!}$$

## next_permutation

`next_permutation(시작지점, 끝지점)`

반드시 정렬되어 있어야 함!

```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    vector<int> arr = {1,2,3};
    sort(arr.begin(), arr.end());

    do {
        for(int element : arr)
            cout << element << ' ';
        cout << '\n';
    } while(next_permutation(arr.begin(), arr.end()));

    return 0;
}
```

## 재귀로 만드는 순열

**C++**

```cpp
#include <bits/stdc++.h>

using namespace std;

int arr[] = {1,2,3};

void permutation(int n, int r, int depth) {
    if(depth == r) {
        //
        return;
    }
    for(int i = depth ; i < n; i++) {
        swap(arr[i], arr[depth]);
        permutation(n, r, depth + 1);
        swap(arr[i], arr[depth]);
    }
}
```

**JavaScript**

```js
const arr = [1, 2, 3];

function permutation(n, r, depth) {
    if (r === depth) {
        console.log(arr.join(" "));
        return;
    }
    for (let index = depth; index < n; index++) {
        [arr[index], arr[depth]] = [arr[depth], arr[index]];
        permutation(n, r, depth + 1);
        [arr[index], arr[depth]] = [arr[depth], arr[index]];
    }
}

permutation(3, 3, 0);
```
