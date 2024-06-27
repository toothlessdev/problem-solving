# 조합

순서와 상관없이 n 개 중 r 개 뽑는 경우의 수

$$\ _nC_r = \frac{n!}{r!(n-r)!} $$

```cpp
#include <bits/stdc++.h>

using namespace std;

void combination(int start, vector<int> selected) {
    if(selected.size() === k) {
        //
        return;
    }
    for(int index = start + 1 ; index < n; index++) {
        selected.push_back(index);
        combination(index, selected);
        selected.pop_back();
    }
}

```

```js
const arr = [1, 2, 3, 4, 5];

const n = 5;
const k = 3;

/**
 * @param {Number} start
 * @param {Array} selected
 */
function combination(start, selected) {
    if (selected.length === k) {
        let elements = [];
        selected.forEach((e) => elements.push(arr[e]));
        console.log(elements);
        return;
    }
    for (let index = start + 1; index < n; index++) {
        selected.push(index);
        combination(index, selected);
        selected.pop();
    }
}

combination(-1, []);
```
