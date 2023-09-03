#include <bits/stdc++.h>
using namespace std;

int dp[5005] = {-1, -1, -1, 1, -1, 1};

int main() {
    ios_base::sync_with_stdio(false);
    cout.tie(nullptr);
    cin.tie(nullptr);

    int n;
    cin >> n;

    for (int i = 6; i <= n; i++) {
        if (dp[i - 3] == -1 && dp[i - 5] == -1)
            dp[i] = -1;
        else if (dp[i - 3] == -1)
            dp[i] = dp[i - 5] + 1;
        else if (dp[i - 5] == -1)
            dp[i] = dp[i - 3] + 1;
        else
            dp[i] = min(dp[i - 3], dp[i - 5]) + 1;
        // cout << dp[i] << ' ';
    }

    cout << dp[n] << '\n';

    return 0;
}