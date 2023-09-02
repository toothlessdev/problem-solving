#include <bits/stdc++.h>
using namespace std;

void combination(int startIndex, vector<int> arr, vector<int> height);

int total = 0;

int main() {
    ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);
    std::cout.tie(nullptr);

    vector<int> height;
    vector<int> arr;

    for (int i = 0; i < 9; i++) {
        int input;
        cin >> input;
        height.push_back(input);
    }

    combination(-1, arr, height);

    return 0;
}

void combination(int startIndex, vector<int> arr, vector<int> height) {
    if (arr.size() == 7) {
        int sum = 0;
        for (int e : arr) {
            sum += e;
        }
        if (sum == 100) {
            sort(arr.begin(), arr.end());
            for (int e : arr) cout << e << '\n';
            exit(0);
        }
        return;
    }
    for (int idx = startIndex + 1; idx < 9; idx++) {
        arr.push_back(height[idx]);
        combination(idx, arr, height);
        arr.pop_back();
    }
    return;
}