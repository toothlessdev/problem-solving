#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> arr = {1, 2, 3};

    // 반드시 정렬되어 있어야 함!
    sort(arr.begin(), arr.end());

    do {
        for (int element : arr)
            cout << element << ' ';
        cout << '\n';
    } while (next_permutation(arr.begin(), arr.end()));

    return 0;
}