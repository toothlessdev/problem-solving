#include <bits/stdc++.h>
using namespace std;

int dp[15] = {0, 1, 2, 4};

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int size;
    cin >> size;

    int *test = new int[size];

    for (int t = 0; t < size; t++) {
        int n;
        cin >> n;

        for (int i = 4; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
        }
        cout << dp[n] << '\n';
    }

    delete[] test;
    return 0;
}