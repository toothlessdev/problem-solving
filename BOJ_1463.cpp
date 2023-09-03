#include <bits/stdc++.h>
using namespace std;

int dp[1000005] = {-1, 0, 1, 1, 2};

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n;
    cin >> n;

    for (int i = 5; i <= n; i++) {
        if (!(i % 3) && !(i % 2))
            dp[i] = min(min(dp[i / 3], dp[i / 2]), dp[i - 1]) + 1;
        else if (!(i % 3))
            dp[i] = min(dp[i / 3], dp[i - 1]) + 1;
        else if (!(i % 2))
            dp[i] = min(dp[i / 2], dp[i - 1]) + 1;
        else
            dp[i] = dp[i - 1] + 1;
    }

    cout << dp[n] << '\n';

    return 0;
}