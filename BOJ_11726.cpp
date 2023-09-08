#include <bits/stdc++.h>
using namespace std;

int dp[1005] = {0, 1, 2};

int main() {
    int n;
    cin >> n;

    for (int i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
    }

    cout << dp[n] % 10007 << '\n';

    return 0;
}