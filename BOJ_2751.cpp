#include <bits/stdc++.h>
using namespace std;

int main() {
    std::cin.tie(nullptr);
    std::cout.tie(nullptr);

    vector<int> arr;
    int size;
    cin >> size;

    for (int i = 0; i < size; i++) {
        int n;
        cin >> n;
        arr.push_back(n);
    }

    sort(arr.begin(), arr.end());

    for (int element : arr) {
        cout << element << '\n';
    }

    return 0;
}