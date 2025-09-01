#include <algorithm>
#include <climits>
#include <iostream>
#include <vector>
using namespace std;

int n, k;
vector<int> arr;
vector<int> prefixSum;

int main() {
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(0);

    cin >> n >> k;
    arr.resize(n);
    prefixSum.resize(n, 0);
    int sum = 0;
    for (int i = 0; i < n; i++) {
        int element;
        cin >> element;

        prefixSum[i] = element + sum;
        sum = prefixSum[i];
    }

    int maxSum = INT_MIN;

    for (int i = k - 1; i < n; i++) {
        maxSum = max(maxSum, prefixSum[i] - prefixSum[i - k]);
    }

    cout << maxSum << '\n';

    return 0;
}