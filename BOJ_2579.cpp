#include <bits/stdc++.h>
using namespace std;

int n;
int dp[500];
vector<int> stairs;

int main() {
    cin >> n;

    for (int i = 0; i < n; i++) {
        int s;
        cin >> s;
        stairs.push_back(s);
    }

    if (n == 1) {
        cout << stairs[0] << '\n';
        return 0;
    }
    dp[1] = stairs[0];
    dp[2] = stairs[0] + stairs[1];

    for (int i = 3; i <= n; i++) {
        dp[i] = max(dp[i - 2] + stairs[i - 1], dp[i - 3] + stairs[i - 2] + stairs[i - 1]);
    }

    cout << dp[n] << '\n';

    return 0;
}