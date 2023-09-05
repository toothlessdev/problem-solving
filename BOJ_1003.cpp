#include <bits/stdc++.h>
using namespace std;

int dp[50][2] = {{1, 0}, {0, 1}};

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int test;
    cin >> test;

    for (int t = 0; t < test; t++) {
        int n;
        cin >> n;

        for (int i = 2; i <= n; i++) {
            dp[i][0] = dp[i - 2][0] + dp[i - 1][0];
            dp[i][1] = dp[i - 2][1] + dp[i - 1][1];
        }

        cout << dp[n][0] << " " << dp[n][1] << '\n';
    }

    return 0;
}